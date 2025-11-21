import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SITE_CONFIG, SKILLS, EXPERIENCE, PROJECTS } from '../constants';

// Construct a context string for the AI
const PORTFOLIO_CONTEXT = `
You are an AI assistant for ${SITE_CONFIG.name}'s portfolio website.
Your goal is to answer visitor questions about ${SITE_CONFIG.name} professionally, concisely, and enthusiastically.
Use the following data as your knowledge base:

BIO:
${SITE_CONFIG.bio}

SKILLS:
${SKILLS.map(s => `- ${s.name} (${s.category})`).join('\n')}

EXPERIENCE:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description}`).join('\n')}

PROJECTS:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.techStack.join(', ')})`).join('\n')}

CONTACT:
Email: ${SITE_CONFIG.email}
LinkedIn: ${SITE_CONFIG.linkedin}
GitHub: ${SITE_CONFIG.github}

Guidelines:
- Keep responses under 3 sentences unless asked for detail.
- Be polite and professional.
- If asked about something not in the context, say you don't have that information but suggest contacting Aveek directly.
`;

const apiKey = process.env.API_KEY || '';

// Initialize client only if key exists to prevent crash on load if missing
const getClient = () => {
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
};

export const generateChatResponseStream = async (
  history: { role: string; text: string }[],
  userMessage: string
): Promise<AsyncGenerator<string, void, unknown> | null> => {
  const client = getClient();
  if (!client) {
    console.error("API Key missing");
    return null;
  }

  try {
    // Using Gemini 2.5 Flash for speed
    const chat = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: PORTFOLIO_CONTEXT,
        temperature: 0.7,
        maxOutputTokens: 300,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessageStream({ message: userMessage });
    
    async function* streamGenerator() {
      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          yield c.text;
        }
      }
    }

    return streamGenerator();

  } catch (error) {
    console.error("Error generating chat response:", error);
    return null;
  }
};