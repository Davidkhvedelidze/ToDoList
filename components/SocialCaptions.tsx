const captions = [
  'Sip Kakheti sunsets, chase Kazbegi dawns. 🍷⛰️ #VisitGeorgia #GeorgiaTours',
  'Tbilisi nights, Svaneti trails — design your dream trip! ✨ #TravelCaucasus',
  'From wine cellars to cliff monasteries, we tailor it all. 🍇🏞️ #GeorgiaTours',
  'Your Georgian story starts here. Ready? 🇬🇪❤️ #VisitGeorgia #TravelCaucasus',
  'Custom tours, local hearts, unforgettable moments. 💫 #GeorgiaTours'
];

export function SocialCaptions() {
  return (
    <section className="section-shell">
      <div className="rounded-3xl bg-white/80 p-10 shadow-glass">
        <h2 className="text-3xl font-semibold text-slate-900">Ad Copy Ready for Social</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Use these ready-to-post captions for Instagram and Facebook campaigns. Emotion-led, emoji-sprinkled, and hashtagged
          for #VisitGeorgia, #TravelCaucasus, and #GeorgiaTours.
        </p>
        <ul className="mt-6 space-y-3 text-sm text-slate-700">
          {captions.map((caption) => (
            <li key={caption} className="rounded-2xl bg-sand-50 px-4 py-3">
              {caption}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
