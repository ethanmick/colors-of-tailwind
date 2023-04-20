import { Analytics } from '@vercel/analytics/react'
import './globals.css'
export const metadata = {
  title: 'Colors of Tailwind | Click to Copy',
  description: 'The fastest way to get the Tailwind CSS color you want.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  )
}
