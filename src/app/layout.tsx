import { Container } from '@/components/Layout';
import { DataProvider, ModalsProvider } from '@/providers';
import '@/styles/fonts.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import 'react-datepicker/dist/react-datepicker.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Banco Hcode',
  description: 'Banco da Hcode Treinamentos desenvolvido durante o Hcode Lab',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="light">
      <body className={inter.className}>
        <DataProvider>
          <ModalsProvider>
            <Container>{children}</Container>
          </ModalsProvider>
        </DataProvider>
      </body>
    </html>
  );
}
