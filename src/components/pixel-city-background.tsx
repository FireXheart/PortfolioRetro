'use client';

export function PixelCityBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-20">
      <svg 
        width="100%" 
        height="100%" 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute bottom-0 left-0 w-full h-1/2"
      >
        <pattern 
          id="cityPattern" 
          x="0" 
          y="0" 
          width="400" 
          height="300" 
          patternUnits="userSpaceOnUse"
        >
          {/* Building 1 */}
          <rect x="10" y="150" width="40" height="150" fill="#3d1500" />
          <rect x="15" y="160" width="4" height="4" fill="#ff6a2e" opacity="0.5" />
          <rect x="35" y="180" width="4" height="4" fill="#ff6a2e" opacity="0.3" />
          
          {/* Building 2 */}
          <rect x="60" y="80" width="60" height="220" fill="#2a0f00" />
          <rect x="70" y="100" width="40" height="2" fill="#5a1e00" />
          <rect x="80" y="90" width="20" height="10" fill="#2a0f00" />
          <rect x="85" y="60" width="2" height="20" fill="#2a0f00" />
          
          {/* Building 3 */}
          <rect x="130" y="120" width="30" height="180" fill="#3d1500" />
          <rect x="140" y="140" width="4" height="4" fill="#ff6a2e" opacity="0.4" />
          
          {/* Building 4 */}
          <rect x="170" y="50" width="50" height="250" fill="#1a0a00" />
          <rect x="180" y="70" width="4" height="4" fill="#ff6a2e" opacity="0.6" />
          <rect x="180" y="120" width="4" height="4" fill="#ff6a2e" opacity="0.2" />
          <rect x="210" y="180" width="4" height="4" fill="#ff6a2e" opacity="0.5" />

          {/* Building 5 */}
          <rect x="230" y="100" width="70" height="200" fill="#2a0f00" />
          <rect x="250" y="120" width="30" height="4" fill="#ff6a2e" opacity="0.1" />

          {/* Tower */}
          <rect x="320" y="140" width="10" height="160" fill="#3d1500" />
          <rect x="315" y="140" width="20" height="2" fill="#3d1500" />
          <rect x="324" y="20" width="2" height="120" fill="#3d1500" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#cityPattern)" />
      </svg>
    </div>
  );
}
