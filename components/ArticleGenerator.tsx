
import React, { useState } from 'react';
import { CONTENT_BRIEFS } from '../constants';
import { generateArticleDraft } from '../services/geminiService';
import { ContentBrief } from '../types';

const ArticleGenerator: React.FC = () => {
  const [selectedBrief, setSelectedBrief] = useState<ContentBrief | null>(null);
  const [draft, setDraft] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!selectedBrief) return;
    setIsLoading(true);
    setDraft('');
    const content = await generateArticleDraft(selectedBrief);
    setDraft(content);
    setIsLoading(false);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold mb-6 text-slate-800">مولد المقالات الذكي (Gemini AI)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">اختر عنوان المقال من الخطة:</label>
            <select 
              className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-slate-50"
              onChange={(e) => setSelectedBrief(CONTENT_BRIEFS.find(b => b.id === Number(e.target.value)) || null)}
              value={selectedBrief?.id || ""}
            >
              <option value="" disabled>-- اختر من الدليل --</option>
              {CONTENT_BRIEFS.map(b => (
                <option key={b.id} value={b.id}>{b.title}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-end">
            <button
              onClick={handleGenerate}
              disabled={!selectedBrief || isLoading}
              className={`w-full py-3 px-6 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${
                !selectedBrief || isLoading ? 'bg-slate-300' : 'bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  جاري الكتابة...
                </>
              ) : (
                <>
                  <span className="text-xl">✍️</span>
                  ابدأ كتابة المقال
                </>
              )}
            </button>
          </div>
        </div>

        {selectedBrief && (
          <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-sm text-emerald-800">
            <strong>نصيحة SEO:</strong> {selectedBrief.seoTip}
          </div>
        )}
      </div>

      {draft && (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 animate-slide-up">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-800">المسودة المولدة</h3>
            <button 
              onClick={() => navigator.clipboard.writeText(draft)}
              className="text-sm text-slate-400 hover:text-emerald-600 flex items-center gap-1"
            >
              📋 نسخ المحتوى
            </button>
          </div>
          <div className="prose prose-slate max-w-none whitespace-pre-wrap font-serif text-slate-700 leading-relaxed">
            {draft}
          </div>
        </div>
      )}

      {isLoading && (
        <div className="flex flex-col items-center justify-center py-20 text-slate-400">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 animate-pulse">
            🤖
          </div>
          <p className="animate-pulse">الذكاء الاصطناعي يقوم بصياغة المحتوى بناءً على الاستراتيجية...</p>
        </div>
      )}
    </div>
  );
};

export default ArticleGenerator;
