
import { GoogleGenAI } from "@google/genai";
import { ContentBrief } from "../types";

const apiKey = process.env.API_KEY || "";

export const generateArticleDraft = async (brief: ContentBrief): Promise<string> => {
  if (!apiKey) return "API Key is missing. Please provide it via process.env.API_KEY.";

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `
    أنت خبير تسويق عقاري وكاتب محتوى محترف (Copywriter).
    المهمة: كتابة مسودة مقال بناءً على الدليل التنفيذي التالي لشركة "عودة للتطوير العقاري" وصاحبها "المهندس خالد عودة".
    
    عنوان المقال: ${brief.title}
    نوع المحتوى: ${brief.type}
    المرحلة التسويقية: ${brief.phase}
    الهيكل المطلوب: ${brief.structure.join(" -> ")}
    نصيحة SEO: ${brief.seoTip}
    
    المتطلبات:
    1. الكتابة باللغة العربية بأسلوب احترافي وجذاب.
    2. التركيز على الحي 25 في العبور الجديدة (حي الصفوة) ومشروع "كمبوند كناري".
    3. إبراز خبرة خالد عودة السابقة (أكثر من 100 مشروع عبر شركة إبداع).
    4. تضمين دعوة واضحة لاتخاذ إجراء (CTA).
    5. استخدام تنسيق Markdown للعناوين والنقاط.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return response.text || "فشل في توليد المحتوى.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "حدث خطأ أثناء الاتصال بـ Gemini API.";
  }
};
