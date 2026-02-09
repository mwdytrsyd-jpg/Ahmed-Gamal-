
export enum FunnelPhase {
  AWARENESS = 'Awareness',
  INTEREST = 'Interest',
  ACTION = 'Action'
}

export interface ContentBrief {
  id: number;
  title: string;
  type: string;
  phase: FunnelPhase;
  target: string;
  structure: string[];
  seoTip: string;
  icon: string;
  category: string;
}

export interface ArticleDraft {
  title: string;
  content: string;
  status: 'draft' | 'generating' | 'idle';
}
