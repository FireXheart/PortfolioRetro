import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pixel Quest Folio | Software Developer',
  description: 'Official portfolio of a software engineer — backend, AI, and game-inspired projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
