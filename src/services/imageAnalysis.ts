import { Disease } from '../types';

// Simulated diseases database
const diseases: Disease[] = [
  {
    diagnosis: "Acne Vulgaris",
    confidence: 0.92,
    description: "Inflammatory condition of the skin caused by clogged hair follicles and oil glands.",
    severity: "medium",
    recommendations: [
      "Keep the affected area clean",
      "Use non-comedogenic products",
      "Consider over-the-counter benzoyl peroxide",
      "Consult a dermatologist for prescription treatment"
    ]
  },
  {
    diagnosis: "Eczema",
    confidence: 0.88,
    description: "Chronic inflammatory skin condition characterized by dry, itchy patches.",
    severity: "medium",
    recommendations: [
      "Moisturize regularly",
      "Avoid known triggers",
      "Use gentle, fragrance-free products",
      "Consider using a humidifier"
    ]
  },
  {
    diagnosis: "Psoriasis",
    confidence: 0.95,
    description: "Autoimmune condition causing rapid skin cell growth and scaling.",
    severity: "high",
    recommendations: [
      "Keep skin moisturized",
      "Get regular sun exposure (with protection)",
      "Avoid skin injury and irritation",
      "Consult a dermatologist for treatment options"
    ]
  }
];

export async function analyzeSkinImage(imageFile: File): Promise<Disease> {
  // Simulate API processing time
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Randomly select a disease for demonstration
  const randomIndex = Math.floor(Math.random() * diseases.length);
  return diseases[randomIndex];
}