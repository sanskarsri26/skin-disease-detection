export interface Disease {
  confidence: number;
  diagnosis: string;
  description: string;
  severity?: 'low' | 'medium' | 'high';
  recommendations?: string[];
}