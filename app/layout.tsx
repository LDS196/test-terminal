import './globals.css'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/app/components/Registry/registry'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Payment terminal',
  description: 'Payment terminal',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
