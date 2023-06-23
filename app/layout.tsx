import './globals.css'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/app/registry'
import React from 'react'
import styles from '@/app/page.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Payment terminal',
  description: 'Payment terminal',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <main className={styles.main}>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
