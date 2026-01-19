import { GoogleGenAI, Chat } from "@google/genai";
import { EVENTS, FEST_DATES } from '../constants';

const SYSTEM_INSTRUCTION = `
You are 'Volt', the official AI Concierge for Prastuti '26, the annual fest of the Electrical Engineering Department, IIT BHU Varanasi.
The dates are ${FEST_DATES}.
Your tone should be helpful, energetic, slightly technical/futuristic, and welcoming.

Here is the event schedule and details you know:
${JSON.stringify(EVENTS.map(e => ({ title: e.title, category: e.category, date: e.date, time: e.time, description: e.description })))}

Rules:
1. Only answer questions related to the fest, electrical engineering, the schedule, or general inquiries about the event.
2. If asked about registration, tell them that online registration is currently closed or that they can register on-spot at the event help desk.
3. Keep answers concise (under 100 words) unless asked for details.
4. If you don't know something, suggest they contact the team via the Teams page.
`;

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize Gemini:", error);
    throw error;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const result = await chat.sendMessage({ message });
    return result.text || "I'm experiencing some interference. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection to the neural network failed. Please check your API key or internet connection.";
  }
};
