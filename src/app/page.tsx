import { Terminal } from '@/components/terminal';
import { Github } from 'lucide-react';

export default function Home() {
  return (
    <div className="via-black p-4 relative h-screen">
      <div
        className="rounded-2xl h-[90vh] flex flex-col border-8 shadow-2xl w-full max-w-7xl mx-auto mt-8 relative border-zinc-800"
        style={{
          background:
            'linear-gradient(180deg, #2d2d2d 0%, #1a1a1a 20%, #0a0a0a 60%, #000000 100%)',
          boxShadow:
            '0 20px 60px rgba(0, 0, 0, 0.8), inset 0 0 40px rgba(0, 255, 0, 0.05)',
        }}
      >
        {/* Efecto de bordes metálicos */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow:
              'inset 0 0 30px rgba(0, 0, 0, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.05)',
          }}
        />
        {/* Barra de título militar-industrial */}
        <div className="flex items-center justify-between bg-gradient-to-r from-zinc-800 to-zinc-800 px-6 py-4 border-b-4 border-gray- relative">
          {/* Efecto de scanlines en la barra */}
          <div className="absolute inset-0 pointer-events-none opacity-15">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0, 255, 0, 0.2) 1px, rgba(0, 255, 0, 0.2) 2px)',
              }}
            />
          </div>
          {/* Título de la terminal */}
          <div
            className="text-zinc-500 text-lg font-bold font-mono relative z-10 tracking-wider"
            style={{
              letterSpacing: '0.2em',
            }}
          >
            ARIAN CEJAS (TM) TERMLINK PORTFOLIO
          </div>
        </div>

        {/* Contenido de la terminal */}
        <Terminal />

        {/* Grille de ventilación militar-industrial */}
        <div className="bg-zinc-800 border-t-2 border-zinc-600 px-6 py-3 flex items-center justify-end">
          <div className="size-6 bg-gray-500 border-gray-400 flex items-center justify-center shadow-lg p-4 rounded-sm">
            <a
              href="/TO-REPO"
              target="_blank"
              className="text-gray-900 text-sm font-bold"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
