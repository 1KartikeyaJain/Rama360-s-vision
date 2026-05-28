

   // app/page.tsx or pages/index.tsx
   import React from 'react';
   import Sidebar from '../Dashboard/components/Sidebar';
   
   const LogoIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
   
const TopBar: React.FC = () => {
  return (
    <nav className="w-full h-14 bg-purple-950 text-gray-200 flex items-center px-6 shadow-lg z-10">
      <div className="flex items-center gap-3">
        <LogoIcon className="w-6 h-6 text-purple-400" />
        <span className="font-semibold text-lg">Rama's 360OS™</span>
      </div>
      {/* Other top-bar items like user menu could go here */}
    </nav>
  );
};


const StepBadge = ({ index }: { index: number }) => (
  <span className="inline-flex items-center rounded-full border border-yellow-500 bg-yellow-600/40 px-3 py-1 text-sm font-semibold text-yellow-300">
    {`Step ${index}`}
  </span>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-2">
    <span className="mt-1 text-yellow-300">•</span>
    <span className="leading-relaxed text-yellow-100">{children}</span>
  </li>
);

const Section = ({
  index,
  title,
  bullets = [],
  body = [],
}: {
  index: number;
  title: string;
  bullets?: string[];
  body?: string[];
}) => (
  <section className="space-y-3">
    <StepBadge index={index} />
    <h3 className="text-base font-semibold text-yellow-100">{title}</h3>

    {bullets.length > 0 && (
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <Bullet key={i}>{b}</Bullet>
        ))}
      </ul>
    )}

    {body.length > 0 && (
      <div className="space-y-2">
        {body.map((p, i) => (
          <p key={i} className="leading-relaxed text-yellow-100">
            {p}
          </p>
        ))}
      </div>
    )}
  </section>
);

export default function Ramas360OS() {
  return (

 <div className="flex flex-col min-h-screen w-full bg-black overflow-hidden">
      {/* Header with bottom border */}
      <div className="border-b-4 border-purple-300">
        <TopBar />
      </div>

      {/* Primary app area */}
      <div className="flex min-h-screen bg-gradient-to-br from-[#21214d] to-[#20122e] text-white ">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content (assistant) */}
        <main className="flex-1 flex flex-col bg-black pb-16">
          {/* Top Bar / Header inside main */}
          <div className="bg-black px-16 py-4 flex flex-col items-center justify-center">
            <span className="text-[#b97bf5] font-semibold text-lg">
              <span role="img" aria-label="Assistant">
                🛎️
              </span>{' '}
              360OS™ Assistant
            </span>
            <span className="text-[#a6a3b8] text-sm mt-1">
              Type or use the mic • Click "Listen" to hear responses. Ex: "I'm stressed" for guidance.
            </span>
          </div>

          {/* Main Assistant Box */}
          <div className="flex-1 bg-gradient-to-br from-[#21144c] to-[#220d33] rounded-lg mx-10 shadow-lg flex flex-col justify-end">
            {/* Chat Input Area */}
            <div className="flex items-center pb-6 px-20">
              <button className="flex items-center justify-center w-8 h-8 rounded-full bg-[#30114e] text-[#b97bf5] mr-3">
                <span role="img" aria-label="Mic">
                  🎤
                </span>
              </button>
              <input
                type="text"
                placeholder="Type your message or click mic to speak..."
                className="flex-1 px-4 py-2 rounded-lg bg-[#23224e] text-[#b97bf5] placeholder-[#a6a3b8] outline-none"
              />
              <button className="ml-3 px-6 py-2 bg-[#b97bf5] text-[#181946] font-bold rounded-lg hover:bg-[#d1a3fa]">
                SEND
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}