export function PixelArtAvatar({ size = 60 }: { size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      shapeRendering="crispEdges"
      className="pixel-avatar"
    >
      {/* Background Frame */}
      <rect width="16" height="16" fill="#1a1a1a" />
      {/* Hair */}
      <rect x="3" y="2" width="10" height="4" fill="#2d1a0a" />
      <rect x="2" y="3" width="1" height="5" fill="#2d1a0a" />
      <rect x="13" y="3" width="1" height="5" fill="#2d1a0a" />
      {/* Skin */}
      <rect x="4" y="5" width="8" height="7" fill="#8d5524" />
      <rect x="3" y="6" width="1" height="4" fill="#8d5524" />
      <rect x="12" y="6" width="1" height="4" fill="#8d5524" />
      {/* Eyes */}
      <rect x="5" y="7" width="2" height="1" fill="#000" />
      <rect x="9" y="7" width="2" height="1" fill="#000" />
      {/* Mouth */}
      <rect x="7" y="10" width="2" height="1" fill="#c68642" />
      {/* Shirt/Hoodie */}
      <rect x="2" y="12" width="12" height="4" fill="#e05a1e" />
      {/* Glow Detail */}
      <rect x="7" y="13" width="2" height="1" fill="#ff6a2e" />
    </svg>
  );
}
