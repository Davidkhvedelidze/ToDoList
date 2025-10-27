export function AITravelChatSection() {
  return (
    <section className="section-shell" id="ai-chat">
      <div className="grid gap-10 rounded-3xl bg-white/80 p-10 shadow-glass md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">Plan your trip with our AI Travel Assistant</h2>
          <p className="text-slate-600">
            Tell us your mood—nightlife, wine, hikes—and watch your itinerary come alive. Our assistant guides you through
            travel dates, group size, pace, interests, accommodations, and budget before presenting a day-by-day plan.
          </p>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>• Nature lovers: Kazbegi + Svaneti with 4x4 access to remote valleys.</li>
            <li>• Wine enthusiasts: Boutique Kakheti cellars, qvevri workshops, and sommelier pairings.</li>
            <li>• Culture seekers: Tbilisi, Mtskheta, Kutaisi heritage hotels and private storytellers.</li>
            <li>• Adventure travelers: Gudauri slopes, hiking days, and local mountain guides.</li>
          </ul>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="rounded-full bg-sand-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-sand-600"
            >
              Chat with the AI Guide
            </a>
            <a
              href="/contact"
              className="rounded-full border border-sand-400 px-6 py-3 text-sm font-semibold text-sand-600 transition hover:bg-sand-50"
            >
              Talk to a Human Host
            </a>
          </div>
        </div>
        <div className="glass-card space-y-4 rounded-3xl p-6">
          <h3 className="text-lg font-semibold text-slate-900">Conversation Flow</h3>
          <ol className="space-y-2 text-sm text-slate-600">
            <li>1. Greet traveler ➝ ask for travel dates & group size.</li>
            <li>2. Ask about preferred pace: relaxed, balanced, or active.</li>
            <li>3. Clarify interests: nature, culture, wine, food, nightlife.</li>
            <li>4. Confirm accommodation style and budget level.</li>
            <li>5. Summarize days, regions, vehicle type, hotels, and price.</li>
            <li>6. Offer next steps: show tour on the site or email.</li>
          </ol>
          <div className="rounded-2xl bg-sand-100 p-4 text-sm text-slate-700">
            Opening message: “Hey there! I’m your virtual guide in Georgia 🇬🇪. Tell me what kind of adventure you want —
            nature, culture, wine, or all of them?”
          </div>
          <div className="rounded-2xl border border-dashed border-sand-300 p-4 text-xs text-slate-500">
            Integrations: Next.js + TypeScript + OpenAI API + LangChain + Valtio store. Support multilingual chat, quick intents,
            itinerary cards, and Stripe / PayPal deposits.
          </div>
        </div>
      </div>
    </section>
  );
}
