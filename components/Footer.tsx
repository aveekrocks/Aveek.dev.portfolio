import React from 'react';
import { SITE_CONFIG } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-slate-500 text-sm">
          © 2025 Aveek Sharma. All rights reserved.
        </div>
      </div>
    </footer>
  );
};