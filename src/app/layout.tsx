import { Container } from '@/components/Layout';
import { DataProvider } from '@/providers/DataProvider';
import '@/styles/fonts.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Banco Hcode',
  description: 'Banco da Hcode Treinamentos desenvolvido durante o Hcode Lab',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <DataProvider>
          <Container>{children}</Container>
        </DataProvider>
      </body>
    </html>
  );
}
