import React, { useState } from 'react';
import { Stethoscope, Shield, AlertCircle } from 'lucide-react';
import ImageUpload from './components/ImageUpload';
import ResultCard from './components/ResultCard';
import { analyzeSkinImage } from './services/imageAnalysis';
import { Disease } from './types';

function App() {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<Disease | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageSelect = async (file: File) => {
    setAnalyzing(true);
    setError(null);
    
    try {
      const result = await analyzeSkinImage(file);
      setResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-900">
                DermAI Diagnosis
              </h1>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                HIPAA Compliant
              </div>
              <div className="flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                Medical Grade Analysis
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Skin Condition Analysis
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload or take a photo of your skin concern for instant AI-powered analysis. 
            Our advanced algorithms provide accurate detection of various skin conditions.
          </p>
        </div>

        <ImageUpload onImageSelect={handleImageSelect} />

        {error && (
          <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-center">
            {error}
          </div>
        )}

        {analyzing && (
          <div className="text-center mt-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Analyzing your image...</p>
          </div>
        )}

        {result && <ResultCard {...result} />}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="h-6 w-6 text-blue-500" />,
              title: "Privacy First",
              description: "Your data is encrypted and never stored without consent"
            },
            {
              icon: <AlertCircle className="h-6 w-6 text-blue-500" />,
              title: "Quick Results",
              description: "Get instant analysis powered by advanced AI algorithms"
            },
            {
              icon: <Stethoscope className="h-6 w-6 text-blue-500" />,
              title: "Medical Grade",
              description: "Trained on vast datasets of verified medical images"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                {feature.icon}
                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-50 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500 text-sm">
            Disclaimer: This tool is for educational purposes only and should not replace professional medical advice.
            Always consult with a healthcare provider for proper diagnosis and treatment.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;