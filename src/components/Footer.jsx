import { Twitter, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="support" className="relative border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <h3 className="text-base font-semibold text-gray-900">PowerTopup</h3>
              <p className="text-sm text-gray-600">Top up power-ups in seconds. Game on.</p>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <a href="#" aria-label="Twitter" className="rounded-lg p-2 hover:bg-gray-100"><Twitter size={18} /></a>
              <a href="#" aria-label="Instagram" className="rounded-lg p-2 hover:bg-gray-100"><Instagram size={18} /></a>
              <a href="#" aria-label="YouTube" className="rounded-lg p-2 hover:bg-gray-100"><Youtube size={18} /></a>
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} PowerTopup — All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
