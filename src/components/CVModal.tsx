import { useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_yl37uf8';
const EMAILJS_TEMPLATE_ID = 'template_pijm9jb';
const EMAILJS_PUBLIC_KEY = 'Y4sqkVZ78waf4XhyQ';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const cvUrl = 'https://drive.google.com/file/d/10GL7gLyYzoxCHiPke5EU_Wy0Gi480jYj/view?usp=drive_link';

  const handleSend = async () => {
    if (!email.includes('@')) return;
    setStatus('loading');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { to_email: email, cv_link: cvUrl },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleClose = () => {
    setEmail('');
    setStatus('idle');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 w-full max-w-md mx-4 relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors text-lg leading-none"
        >
          ✕
        </button>

        {status === 'success' ? (
          <div className="text-center py-4">
            <div className="text-4xl mb-4">✓</div>
            <p className="text-white font-semibold text-lg">Wysłano!</p>
            <p className="text-gray-400 text-sm mt-2">CV zostało wysłane na adres<br /><span className="text-primary">{email}</span></p>
          </div>
        ) : (
          <>
            <h3 className="text-white font-semibold text-xl mb-1">Otrzymaj moje CV</h3>
            <p className="text-gray-400 text-sm mb-6">Podaj swój adres e-mail — wyślę Ci je od razu.</p>

            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="twoj@email.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/60 transition-colors mb-4"
            />

            {status === 'error' && (
              <p className="text-red-400 text-sm mb-4">Coś poszło nie tak. Spróbuj ponownie.</p>
            )}

            <button
              onClick={handleSend}
              disabled={status === 'loading' || !email.includes('@')}
              className="w-full bg-primary hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-all duration-300"
            >
              {status === 'loading' ? 'Wysyłanie...' : 'Wyślij CV'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
