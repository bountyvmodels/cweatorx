import React from 'react';
import MyApp from './app';
import { CustomizerContextProvider } from './context/customizerContext';

// ─────────────────────────────────────────────
//  ⚠️  USING “Playfair Display” AS A FREE SERIF
//  If you decide to self-host Kulachat Serif, change this.
// ─────────────────────────────────────────────
import { Playfair_Display } from 'next/font/google';
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'CWEATORS',
  description: 'Create. Discover. Earn.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={playfair.className}>
      <body>
        <CustomizerContextProvider>
          <MyApp session={undefined}>{children}</MyApp>
        </CustomizerContextProvider>
      </body>
    </html>
  );
}
