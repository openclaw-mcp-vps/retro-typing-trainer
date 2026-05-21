export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block mb-4 px-3 py-1 rounded-full border border-[#58a6ff] text-[#58a6ff] text-xs tracking-widest uppercase">
          Classic Literature · Real-Time WPM · Achievements
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Learn Typing by Retyping{" "}
          <span className="text-[#58a6ff]">Classic Novels</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Practice typing with passages from Dickens, Austen, and Hemingway. Track your WPM, unlock achievements, and build a habit that actually sticks.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Start Typing for $7/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required to try.</p>
        {/* Fake terminal preview */}
        <div className="mt-14 rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left">
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
          </div>
          <p className="text-[#8b949e] text-sm mb-2">Chapter 1 — A Tale of Two Cities</p>
          <p className="text-[#c9d1d9] font-mono text-sm leading-relaxed">
            <span className="text-[#58a6ff]">It was the best of times, it was the worst of times,</span>
            <span className="text-[#c9d1d9]"> it was the age of wisdom,</span>
            <span className="animate-pulse text-[#58a6ff]">|</span>
          </p>
          <div className="mt-4 flex gap-6 text-xs text-[#8b949e]">
            <span>WPM: <span className="text-[#58a6ff] font-bold">72</span></span>
            <span>Accuracy: <span className="text-[#58a6ff] font-bold">98%</span></span>
            <span>Streak: <span className="text-[#58a6ff] font-bold">7 days</span></span>
          </div>
        </div>
      </section>

      {/* Features row */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {[
          { icon: "📖", title: "50+ Classic Passages", desc: "Curated excerpts from public domain masterpieces" },
          { icon: "⚡", title: "Real-Time WPM", desc: "Live speed and accuracy feedback as you type" },
          { icon: "🏆", title: "Achievements", desc: "Unlock badges and track your daily streak" }
        ].map((f) => (
          <div key={f.title} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-bold text-[#c9d1d9] mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16 text-center">
        <h2 className="text-2xl font-bold mb-8">Simple Pricing</h2>
        <div className="rounded-xl border-2 border-[#58a6ff] bg-[#161b22] p-8">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold mb-1">$7</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-left space-y-3 mb-8">
            {[
              "Unlimited typing sessions",
              "Full library of 50+ passages",
              "WPM history & analytics",
              "Achievement badges",
              "Daily streak tracking",
              "Cancel anytime"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded-lg hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold mb-8 text-center">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "What books are included?",
              a: "We include passages from public domain classics like A Tale of Two Cities, Pride and Prejudice, The Old Man and the Sea, Moby Dick, and more — 50+ passages at launch."
            },
            {
              q: "How does billing work?",
              a: "You're billed $7/month via Lemon Squeezy. You can cancel at any time from your billing portal — no questions asked."
            },
            {
              q: "Is this good for beginners?",
              a: "Absolutely. Passages are sorted by difficulty and length. Beginners start with short, simple sentences and progress to longer, more complex prose."
            }
          ].map((item) => (
            <div key={item.q} className="border border-[#30363d] rounded-lg p-6">
              <h3 className="font-bold text-[#c9d1d9] mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Retro Typing Trainer. Built for readers who type.
      </footer>
    </main>
  );
}
