import { proxy } from 'valtio';

export type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

const greeting = "Hey there! I’m your virtual guide in Georgia 🇬🇪. Tell me what kind of adventure you want — nature, culture, wine, or all of them?";

const randomId = () => Math.random().toString(36).slice(2);

export const chatState = proxy({
  isOpen: false,
  input: '',
  placeholder: 'Ask about wine tours, mountain treks, nightlife...',
  suggestedIntents: ['Wine', 'Adventure', 'Family', 'Culture'],
  messages: [{ id: 'greeting', role: 'assistant' as const, content: greeting }],
  toggle() {
    chatState.isOpen = !chatState.isOpen;
  },
  handleIntent(intent: string) {
    chatState.input = intent;
  },
  sendMessage() {
    if (!chatState.input.trim()) return;
    const userMessage: ChatMessage = {
      id: randomId(),
      role: 'user',
      content: chatState.input.trim()
    };
    chatState.messages = [...chatState.messages, userMessage];
    const itineraryPreview =
      'Thanks! I’ll craft a sample itinerary: 5 days across Tbilisi, Kakheti wine country, and Kazbegi. Boutique hotels, private driver, qvevri tasting. Want me to email it or show it on the site?';
    chatState.messages = [
      ...chatState.messages,
      {
        id: randomId(),
        role: 'assistant',
        content: itineraryPreview
      }
    ];
    chatState.input = '';
  }
});
