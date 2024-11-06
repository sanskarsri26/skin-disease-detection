import React from 'react';
import { AlertCircle, Activity, FileText, AlertTriangle } from 'lucide-react';
import { Disease } from '../types';

type ResultCardProps = Disease;

export default function ResultCard({ 
  confidence, 
  diagnosis, 
  description, 
  severity,
  recommendations 
}: ResultCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl mx-auto mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <AlertCircle className="text-blue-500" />
          Diagnosis Result
        </h3>
        <div className="flex items-center gap-2">
          <Activity className="text-green-500" />
          <span className="font-medium">
            {(confidence * 100).toFixed(1)}% Confidence
          </span>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-700 mb-2">Detected Condition</h4>
          <p className="text-lg text-blue-600 font-semibold">{diagnosis}</p>
          {severity && (
            <div className="mt-2 flex items-center gap-2">
              <AlertTriangle className={`h-4 w-4 ${
                severity === 'high' ? 'text-red-500' :
                severity === 'medium' ? 'text-yellow-500' :
                'text-green-500'
              }`} />
              <span className="text-sm font-medium capitalize">{severity} Severity</span>
            </div>
          )}
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-2">
            <FileText className="text-gray-500" />
            <h4 className="font-medium text-gray-700">Description</h4>
          </div>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        {recommendations && recommendations.length > 0 && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-gray-700 mb-2">Recommendations</h4>
            <ul className="list-disc list-inside space-y-1">
              {recommendations.map((rec, index) => (
                <li key={index} className="text-gray-600">{rec}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}