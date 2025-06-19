// ui/app/page.tsx
import dynamic from 'next/dynamic';

// Dynamically import the client-side landing page and disable SSR
const LandingClient = dynamic(() => import('./LandingClient'), { ssr: false });

export default function Home() {
  // Render the client component (contains all onClick logic)
  return <LandingClient />;
}

