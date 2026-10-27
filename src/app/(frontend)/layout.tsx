import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Orbitron } from 'next/font/google'

import { cn } from '@/utilities/ui'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo' })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(archivo.variable, orbitron.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/icon-light-32x32.png" rel="icon" media="(prefers-color-scheme: light)" />
        <link href="/icon-dark-32x32.png" rel="icon" media="(prefers-color-scheme: dark)" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-icon.png" rel="apple-touch-icon" />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Header />
          {children}
          <Footer />
        </Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: 'Aalto Formula Team — Built by Students, Powered by Innovation',
  description:
    "Aalto Formula Team is a student-run Formula Student team designing, engineering and building a race car from the ground up. Partner with Finland's future in motorsport.",
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#9b0c24',
}
