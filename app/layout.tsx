import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

export const metadata: Metadata = {
  title: 'VibeCoder TR - Türk Indie Developer Topluluğu',
  description:
    'Google Play 12 test kullanıcısı sorunu ve vibe coding yardımlaşma topluluğu. Cursor, Claude, Expo, Supabase sorularını sor.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}

