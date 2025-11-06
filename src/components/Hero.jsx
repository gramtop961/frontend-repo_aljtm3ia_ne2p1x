import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0" aria-hidden="true">
        <Spline scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white"></div>
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur supports-[backdrop-filter]:bg-white/50">
            <Rocket size={14} /> Fast • Safe • Global
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Top up power-ups in seconds.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            A modern, clean and powerful top‑up hub for every gamer. Instant delivery. No drama.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
            <a href="#topup" className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-black/90">
              Start Top Up
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
              How it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
