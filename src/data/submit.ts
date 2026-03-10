export interface SubmitTool {
  name: string;
  url: string;
  category: string;
  description: string;
  tags: string[];
  submitter?: string;
  submittedAt?: string;
}

export const categories = [
  { id: 'writing', name: '写作', icon: '✍️' },
  { id: 'image', name: '绘画', icon: '🎨' },
  { id: 'code', name: '编程', icon: '💻' },
  { id: 'office', name: '办公', icon: '📊' },
  { id: 'audio', name: '音频', icon: '🎵' },
  { id: 'video', name: '视频', icon: '🎬' },
  { id: 'other', name: '其他', icon: '📦' },
];
