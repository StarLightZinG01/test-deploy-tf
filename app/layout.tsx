import type { Metadata } from 'next'
import "./globals.css";

export const metadata: Metadata = {
  title: 'Next.js + Prisma Demo',
  description: 'Simple CRUD app for EC2 deployment testing',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body style={{ margin: 0, background: '#fff' }}>{children}</body>
    </html>
  )
}
