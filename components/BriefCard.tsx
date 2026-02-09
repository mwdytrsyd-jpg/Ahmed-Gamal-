
import React from 'react';
import { ContentBrief, FunnelPhase } from '../types';

interface BriefCardProps {
  brief: ContentBrief;
  onAction?: (brief: ContentBrief) => void;
}

const BriefCard: React.FC<BriefCardProps> = ({ brief, onAction }) => {
  const getPhaseColor = (phase: FunnelPhase) => {
    switch (phase) {
      case FunnelPhase.AWARENESS: return 'bg-blue-100 text-blue-700';
      case FunnelPhase.INTEREST: return 'bg-amber-100 text-amber-700';
      case FunnelPhase.ACTION: return 'bg-emerald-100 text-emerald-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <span className="text-3xl">{brief.icon}</span>
        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${getPhaseColor(brief.phase)}`}>
          {brief.phase}
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight">
        {brief.title}
      </h3>
      
      <p className="text-sm text-slate-500 mb-4 italic">
        {brief.type}
      </p>

      <div className="space-y-2 mb-6 flex-grow">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">الهيكل المقترح:</p>
        <ul className="text-sm text-slate-600 space-y-1">
          {brief.structure.slice(0, 3).map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-emerald-500">•</span>
              {item}
            </li>
          ))}
          {brief.structure.length > 3 && <li className="text-slate-400">...والمزيد</li>}
        </ul>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="text-xs text-slate-400">
          <strong>الهدف:</strong> {brief.target}
        </div>
        {onAction && (
          <button 
            onClick={() => onAction(brief)}
            className="text-emerald-600 hover:text-emerald-700 font-bold text-sm flex items-center gap-1"
          >
            توليد المسودة
            <span className="text-lg">←</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default BriefCard;
