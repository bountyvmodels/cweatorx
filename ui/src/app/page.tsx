// ui/app/page.tsx
import dynamic from 'next/dynamic';

// Disable SSR
const LandingClient = dynamic(() => import('./LandingClient'), { ssr: false });

export default function HomePage() {
  return <LandingClient />;
}
