
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import BriefCard from './components/BriefCard';
import ArticleGenerator from './components/ArticleGenerator';
import { CONTENT_BRIEFS } from './constants';
import { FunnelPhase } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-10 animate-fade-in">
            {/* Header Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 p-6 rounded-3xl text-white shadow-xl shadow-emerald-200">
                <p className="text-emerald-100 text-sm font-medium mb-1">إجمالي المقالات المخططة</p>
                <p className="text-4xl font-extrabold">8</p>
                <div className="mt-4 flex gap-2">
                  <span className="bg-white/20 px-2 py-1 rounded text-[10px] uppercase font-bold">Local SEO</span>
                  <span className="bg-white/20 px-2 py-1 rounded text-[10px] uppercase font-bold">Brand Hub</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <p className="text-slate-400 text-sm font-medium mb-1">أهداف التحويل</p>
                <p className="text-4xl font-extrabold text-slate-800">3</p>
                <div className="mt-4 flex gap-2">
                  <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-[10px] uppercase font-bold">Compound Canary</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <p className="text-slate-400 text-sm font-medium mb-1">درجة الموثوقية (Trust)</p>
                <p className="text-4xl font-extrabold text-slate-800">95%</p>
                <div className="mt-4 flex gap-2">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-[10px] uppercase font-bold">Legacy Transfer</span>
                </div>
              </div>
            </div>

            {/* Funnel Visualization */}
            <section className="bg-slate-50 p-8 rounded-3xl border border-dashed border-slate-200">
              <h2 className="text-2xl font-bold mb-8 text-slate-800 flex items-center gap-2">
                <span className="text-emerald-500">◈</span>
                توزيع مراحل القمع التسويقي (Marketing Funnel)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Arrow connectors hidden on mobile */}
                <div className="hidden md:block absolute top-1/2 left-1/3 w-8 h-px bg-slate-300 -translate-y-1/2"></div>
                <div className="hidden md:block absolute top-1/2 left-2/3 w-8 h-px bg-slate-300 -translate-y-1/2"></div>
                
                <div className="space-y-4">
                  <div className="bg-blue-600 text-white p-4 rounded-xl font-bold text-center shadow-md">الوعي (Awareness)</div>
                  <p className="text-xs text-slate-500 text-center">3 مقالات: الحي 25، خالد عودة، السيرة الذاتية</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-amber-500 text-white p-4 rounded-xl font-bold text-center shadow-md">الاهتمام (Interest)</div>
                  <p className="text-xs text-slate-500 text-center">3 مقالات: مراجعة كناري، 6 أسباب، الموقع</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-emerald-600 text-white p-4 rounded-xl font-bold text-center shadow-md">اتخاذ القرار (Action)</div>
                  <p className="text-xs text-slate-500 text-center">مقالان: الأسئلة الشائعة، الدليل القانوني</p>
                </div>
              </div>
            </section>

            {/* Strategy Context */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-4 text-slate-800 underline decoration-emerald-400 underline-offset-8">الرؤية الاستراتيجية</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                تعتمد خطة "خالد عودة" على السيطرة الرقمية لمدينة العبور الجديدة وتحديداً الحي 25 (حي الصفوة). الهدف هو تحويل السمعة القوية لشركة "إبداع" و100 مشروع سابقاً إلى كيان "عودة" الجديد، مع وضع "كمبوند كناري" كدرة تاج الاستثمارات في المنطقة.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl flex items-start gap-4">
                  <div className="text-2xl">🧠</div>
                  <div>
                    <h4 className="font-bold text-slate-800">التوافق مع الـ AI Search</h4>
                    <p className="text-sm text-slate-500">المحتوى مهيأ لإجابات ChatGPT و Gemini المباشرة.</p>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl flex items-start gap-4">
                  <div className="text-2xl">🌍</div>
                  <div>
                    <h4 className="font-bold text-slate-800">الـ Local SEO المكثف</h4>
                    <p className="text-sm text-slate-500">استهداف الموقع الجغرافي الدقيق لتعزيز الموثوقية المكانية.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'content':
        return (
          <div className="space-y-10 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-800">دليل تنفيذ المحتوى (Content Briefs)</h2>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-white border rounded-lg text-xs font-medium text-slate-500">فلترة الكل</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CONTENT_BRIEFS.map((brief) => (
                <BriefCard 
                  key={brief.id} 
                  brief={brief} 
                  onAction={() => setActiveTab('generator')}
                />
              ))}
            </div>
          </div>
        );
      case 'generator':
        return <ArticleGenerator />;
      default:
        return <div>قريباً...</div>;
    }
  };

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto overflow-y-auto">
        <header className="flex justify-between items-center mb-10 md:hidden">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center font-bold text-xl text-white">ع</div>
          <button className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </header>

        {renderContent()}

        <footer className="mt-20 pt-10 border-t border-slate-200 text-center text-slate-400 text-sm">
          <p>© 2024 خطة التطوير العقاري - م/ خالد عودة. صُممت الاستراتيجية لتعزيز التواجد الرقمي في العبور الجديدة.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
