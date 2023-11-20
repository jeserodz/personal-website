import type { Metadata } from 'next'
import { Montserrat, Oxygen } from 'next/font/google'
import { cn } from '@/utils/tailwind.util'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })
const oxygen = Oxygen({ subsets: ['latin'], weight: ['300', '400', '700'] })

export const metadata: Metadata = {
  title: 'Jesé Rodríguez',
  description: 'Software Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          montserrat.className,
          oxygen.className,
          'bg-black',
          'text-white',
          'text-base',
        )}
      >
        {children}
      </body>
    </html>
  )
}
