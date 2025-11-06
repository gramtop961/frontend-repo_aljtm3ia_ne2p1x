import { Shield, Zap, Globe2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { icon: <Globe2 size={18} />, title: 'Pick your game', desc: 'From shooters to RPGs — we support the most played titles worldwide.' },
    { icon: <Zap size={18} />, title: 'Choose a pack', desc: 'Transparent pricing and curated bundles so you get more for less.' },
    { icon: <Shield size={18} />, title: 'Pay securely', desc: 'Bank‑grade encryption, fraud protection, and instant delivery.' },
  ];

  return (
    <section id="how" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">How it works</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-gray-600">Top up in three simple steps — no hidden fees, no waiting.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-gray-900 text-white">
                {s.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
