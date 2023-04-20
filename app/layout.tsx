import './globals.css'

export const metadata = {
  title: 'Tailwind CSS Colors | Click to Copy',
  description: 'The fastest way to get the Tailwind color you want.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
