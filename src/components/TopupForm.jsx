import { useState } from 'react';
import { Gamepad2, ShieldCheck, CreditCard } from 'lucide-react';

const games = [
  { id: 'ml', name: 'Mobile Legends', currency: 'Diamonds' },
  { id: 'valo', name: 'Valorant', currency: 'Points' },
  { id: 'genshin', name: 'Genshin Impact', currency: 'Crystals' },
  { id: 'pubg', name: 'PUBG Mobile', currency: 'UC' },
];

const packs = [
  { id: 'p1', amount: 60, price: 0.99 },
  { id: 'p2', amount: 300, price: 4.49 },
  { id: 'p3', amount: 680, price: 9.99 },
  { id: 'p4', amount: 1280, price: 18.99 },
];

export default function TopupForm() {
  const [game, setGame] = useState(games[0]);
  const [playerId, setPlayerId] = useState('');
  const [pack, setPack] = useState(packs[0]);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const total = pack.price;

  async function handleSubmit(e) {
    e.preventDefault();
    setProcessing(true);
    setSuccess(false);
    // demo: simulate processing
    await new Promise((r) => setTimeout(r, 1200));
    setProcessing(false);
    setSuccess(true);
  }

  return (
    <section id="topup" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
            <Gamepad2 size={18} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Quick top up</h2>
            <p className="text-sm text-gray-600">Instant delivery to your in‑game account</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid gap-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Select game</label>
                <select
                  value={game.id}
                  onChange={(e) => setGame(games.find((g) => g.id === e.target.value))}
                  className="w-full rounded-xl border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-gray-900 focus:ring-gray-900"
                >
                  {games.map((g) => (
                    <option key={g.id} value={g.id}>{g.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Player ID</label>
                <input
                  value={playerId}
                  onChange={(e) => setPlayerId(e.target.value)}
                  placeholder="e.g., 1234567890"
                  className="w-full rounded-xl border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-gray-900 focus:ring-gray-900"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Choose pack</label>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {packs.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPack(p)}
                      className={`rounded-xl border px-3 py-3 text-left text-sm shadow-sm transition-all ${
                        pack.id === p.id
                          ? 'border-gray-900 bg-gray-900 text-white'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold">{p.amount} {game.currency}</div>
                      <div className={pack.id === p.id ? 'text-gray-200' : 'text-gray-500'}>${p.price.toFixed(2)}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
                <span className="text-sm text-gray-700">Total</span>
                <span className="text-lg font-semibold text-gray-900">${total.toFixed(2)}</span>
              </div>

              <button
                type="submit"
                disabled={processing}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-black/90 disabled:opacity-60"
              >
                <CreditCard size={16} /> {processing ? 'Processing…' : 'Pay & Top Up'}
              </button>

              {success && (
                <div className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 p-3 text-sm text-green-800">
                  <ShieldCheck size={16} /> Top up successful! Delivery is instant.
                </div>
              )}
            </div>
          </form>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Why gamers choose us</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span> Instant delivery after payment confirmation</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-violet-500"></span> Secure payment and protected accounts</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-pink-500"></span> Global coverage, local prices</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500"></span> 24/7 support from real humans</li>
            </ul>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {['Visa', 'Mastercard', 'PayPal'].map((p) => (
                <div key={p} className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-center text-xs font-medium text-gray-700">
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
