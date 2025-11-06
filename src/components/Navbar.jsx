import { useState } from 'react';
import { Gamepad2, Menu, X, Shield } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Top Up', href: '#topup' },
    { label: 'How it works', href: '#how' },
    { label: 'Support', href: '#support' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md">
                <Gamepad2 size={20} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-wide text-gray-900">PowerTopup</span>
                <span className="text-[10px] uppercase tracking-wider text-gray-500">for gamers</span>
              </div>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#topup" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-black/90 transition-colors">
                <Shield size={16} /> Secure Checkout
              </a>
            </nav>

            <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/70 backdrop-blur text-gray-700">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/30 px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="rounded-lg px-2 py-2 text-sm font-medium text-gray-800 hover:bg-white/60">
                    {item.label}
                  </a>
                ))}
                <a href="#topup" className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white">
                  <Shield size={16} /> Secure Checkout
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
