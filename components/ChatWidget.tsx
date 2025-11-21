import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Sparkles, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateChatResponseStream } from '../services/geminiService';
import { ChatMessage } from '../types';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hi! I'm Aveek's AI assistant. Ask me anything about his projects, skills, or experience!",
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isThinking) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);

    // Prepare history for API
    const history = messages.map(m => ({ role: m.role, text: m.text }));
    
    // Placeholder for model response
    const modelMsgId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, {
      id: modelMsgId,
      role: 'model',
      text: '',
      timestamp: new Date(),
    }]);

    try {
      const stream = await generateChatResponseStream(history, userMsg.text);
      
      if (stream) {
        let fullText = '';
        for await (const chunk of stream) {
          fullText += chunk;
          setMessages(prev => prev.map(msg => 
            msg.id === modelMsgId ? { ...msg, text: fullText } : msg
          ));
        }
      } else {
         setMessages(prev => prev.map(msg => 
            msg.id === modelMsgId ? { ...msg, text: "I'm sorry, I couldn't connect to my brain (API key might be missing). Please try again later." } : msg
          ));
      }
    } catch (error) {
       console.error(error);
       setMessages(prev => prev.map(msg => 
            msg.id === modelMsgId ? { ...msg, text: "Something went wrong. Please try again." } : msg
          ));
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[500px] glass-panel rounded-2xl shadow-2xl border border-slate-700 flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-700 bg-slate-900/50 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Portfolio AI</h3>
                  <span className="flex items-center gap-1 text-xs text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    Online
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-primary text-white rounded-br-none'
                        : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isThinking && (
                 <div className="flex justify-start">
                  <div className="bg-slate-800 p-3 rounded-2xl rounded-bl-none border border-slate-700 flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-primary" />
                    <span className="text-xs text-slate-400">Thinking...</span>
                  </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-700 bg-slate-900/50">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about Aveek's projects..."
                  className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-full pl-4 pr-12 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-500 transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isThinking}
                  className="absolute right-1.5 top-1.5 p-1.5 bg-primary text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[10px] text-slate-600">Powered by Gemini 2.5 Flash</span>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center z-50 transition-all duration-300 ${
          isOpen ? 'bg-slate-800 text-white border border-slate-600' : 'bg-primary text-white hover:bg-blue-600'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </>
  );
};