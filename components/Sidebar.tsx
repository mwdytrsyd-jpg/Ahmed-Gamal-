
import React from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'overview', label: 'نظرة عامة', icon: '🏠' },
    { id: 'strategy', label: 'الخطة الاستراتيجية', icon: '🗺️' },
    { id: 'content', label: 'دليل المحتوى', icon: '📝' },
    { id: 'generator', label: 'مولد المقالات (AI)', icon: '🤖' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6 hidden md:block">
      <div className="mb-10 flex items-center gap-3">
        <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-xl">
          ع
        </div>
        <h1 className="text-xl font-bold tracking-tight">عودة العقارية</h1>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === item.id 
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/50' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-10 border-t border-slate-800">
        <div className="p-4 bg-slate-800 rounded-xl text-xs">
          <p className="text-slate-400 mb-1">المطور العقاري</p>
          <p className="font-bold text-emerald-400">م/ خالد عودة</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
