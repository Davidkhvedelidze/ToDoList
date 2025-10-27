'use client';

import { useSnapshot } from 'valtio';
import { chatState } from '@/store/chatState';

export function ChatWidget() {
  const snap = useSnapshot(chatState);

  return (
    <div>
      <button
        onClick={() => chatState.toggle()}
        className="fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-sand-500 text-2xl text-white shadow-2xl transition hover:bg-sand-600"
        aria-label="Open AI travel assistant"
      >
        ☀️
      </button>
      {snap.isOpen ? (
        <div className="fixed bottom-40 right-6 z-40 w-full max-w-sm rounded-3xl bg-white shadow-2xl">
          <div className="flex items-center justify-between rounded-t-3xl bg-sand-500 px-4 py-3 text-white">
            <span className="text-sm font-semibold">AI Travel Assistant</span>
            <button onClick={() => chatState.toggle()} aria-label="Close chat" className="text-lg">
              ×
            </button>
          </div>
          <div className="space-y-3 p-4" id="ai-chat">
            <div className="mb-3 flex flex-wrap gap-2">
              {snap.suggestedIntents.map((intent) => (
                <button
                  key={intent}
                  onClick={() => chatState.handleIntent(intent)}
                  className="rounded-full bg-sand-100 px-3 py-1 text-xs font-semibold text-sand-700 hover:bg-sand-200"
                >
                  {intent}
                </button>
              ))}
            </div>
            <div className="max-h-72 space-y-3 overflow-y-auto">
              {snap.messages.map((message) => (
                <div
                  key={message.id}
                  className={`rounded-2xl px-4 py-3 text-sm shadow-sm ${
                    message.role === 'assistant'
                      ? 'bg-sand-100 text-slate-800'
                      : 'ml-auto bg-slate-900 text-white'
                  }`}
                >
                  {message.content}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <input
                value={snap.input}
                onChange={(event) => (chatState.input = event.target.value)}
                placeholder={snap.placeholder}
                className="flex-1 rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-sand-400 focus:outline-none"
              />
              <button
                onClick={chatState.sendMessage}
                className="rounded-full bg-sand-500 px-3 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-sand-600"
              >
                Send
              </button>
            </div>
            <div className="space-y-2 text-xs text-slate-500">
              <p>
                Conversation flow: ask for dates, group size, pace, interests, accommodation, and budget before delivering a
                tailored itinerary.
              </p>
              <p>
                Actions: <strong>Save Tour</strong>, <strong>Talk to Agent</strong>, integrate Stripe / PayPal for deposits.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
