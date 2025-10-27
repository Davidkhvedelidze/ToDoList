export function ContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 shadow-2xl">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 px-6 py-4 text-sm text-slate-700 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-semibold text-slate-900">Talk to a Georgian host:</span>
          <a href="tel:+995555123456" className="rounded-full bg-sand-100 px-3 py-1 font-medium text-sand-700">
            +995 555 123 456
          </a>
          <a
            href="https://wa.me/995555123456"
            className="rounded-full bg-green-500 px-3 py-1 font-semibold text-white shadow-sm transition hover:bg-green-600"
          >
            WhatsApp Us
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs uppercase tracking-wide text-slate-500">Need ideas?</span>
          <a href="#ai-chat" className="rounded-full border border-sand-400 px-3 py-1 font-semibold text-sand-600">
            Launch AI Travel Assistant
          </a>
        </div>
      </div>
    </div>
  );
}
