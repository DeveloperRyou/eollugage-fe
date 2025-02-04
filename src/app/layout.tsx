import type { Metadata } from 'next'
import './globals.css'
import '@eolluga/eolluga-ui/dist/index.css'
import ProviderLayout from '@/shared/ui/ProviderLayout'

export const metadata: Metadata = {
  title: '얼루가게',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased h-dvh">
        <ProviderLayout>
          <div className="relative h-full m-auto">{children}</div>
        </ProviderLayout>
      </body>
    </html>
  )
}
