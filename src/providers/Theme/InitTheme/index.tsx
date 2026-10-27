import Script from 'next/script'
import React from 'react'

// The site is light-only: always mark the document as light before hydration.
export const InitTheme: React.FC = () => {
  return (
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.setAttribute('data-theme', 'light')`,
      }}
      id="theme-script"
      strategy="beforeInteractive"
    />
  )
}
