import React from 'react';

export function DamascoFruitLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo Damasco"
    >
      <defs>
        <linearGradient id="damascoGrad" x1="8" y1="12" x2="40" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fca5a5" />
          <stop offset="25%" stopColor="#fb923c" />
          <stop offset="65%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="damascoLeaf" x1="24" y1="4" x2="38" y2="18" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
        <linearGradient id="damascoStem" x1="22" y1="4" x2="25" y2="14" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
      </defs>

      {/* Stem */}
      <path 
        d="M23 15C22.5 11.5 21 8.5 17 6" 
        stroke="url(#damascoStem)" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
      />

      {/* Leaf */}
      <path 
        d="M24 13C25 8.5 30 5.5 37 6C36.5 11 32 15 26 14.5" 
        fill="url(#damascoLeaf)" 
      />
      <path 
        d="M24.5 13C29 10 33 8 36.5 6.5" 
        stroke="#166534" 
        strokeWidth="1" 
        strokeLinecap="round" 
        opacity="0.6" 
      />

      {/* Main Damasco Body - Apricot shape with cleft */}
      <path 
        d="M24 16C16 16 10 21 10 29.5C10 37.5 16.5 43 23.5 43C24.5 43 25.5 42.5 26.5 42.5C32.5 42.5 38 37.5 38 29.5C38 21 32 16 24 16Z" 
        fill="url(#damascoGrad)" 
      />

      {/* Apricot Cleft line / furrow */}
      <path 
        d="M24 16.5C24.5 22 24.2 32 23.8 42.8" 
        stroke="#c2410c" 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        opacity="0.5" 
      />

      {/* Soft highlight reflection */}
      <path 
        d="M15 22C13.5 25 13.5 29 15 32" 
        stroke="#fed7aa" 
        strokeWidth="2" 
        strokeLinecap="round" 
        opacity="0.6" 
      />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.2.84.85-3.12-.2-.32a8.188 8.188 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.23-8.25 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.13.17 1.74 2.65 4.21 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z"/>
    </svg>
  );
}

export function MercadoLivreIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.8 14.7l-3.8-2.2-3.8 2.2 1-4.3-3.3-2.9 4.4-.4L12 5l1.7 4.1 4.4.4-3.3 2.9 1 4.3z"/>
    </svg>
  );
}

export function ShopeeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.38 8.04l-1.39-4.87A1.99 1.99 0 0016.07 1.8H7.93a1.99 1.99 0 00-1.92 1.37L4.62 8.04A2.99 2.99 0 004 9.87V19a3 3 0 003 3h10a3 3 0 003-3V9.87c0-.65-.22-1.28-.62-1.83zM12 4.8c1.33 0 2.4 1.07 2.4 2.4H9.6c0-1.33 1.07-2.4 2.4-2.4zm2.8 10.4c0 1.21-.99 2.2-2.2 2.2s-2.2-.99-2.2-2.2c0-.52.19-.99.5-1.36.46-.54 1.13-.91 1.7-.91s1.24.37 1.7.91c.31.37.5.84.5 1.36z"/>
    </svg>
  );
}

export function MagaLuIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 4h16v3H4zm2 5h12v11a2 2 0 01-2 2H8a2 2 0 01-2-2V9zm3 3v5h2v-5H9zm4 0v5h2v-5h-2z"/>
    </svg>
  );
}

export function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

export function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export function MapPinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
