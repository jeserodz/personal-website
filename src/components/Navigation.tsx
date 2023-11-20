'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/tailwind.util'

export const NAV_LINKS = [
  { title: 'About', path: '/' },
  { title: 'Blog', path: '/blog' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <section className="navigation p-4 grid justify-center grid-flow-col gap-4">
      {NAV_LINKS.map((item, i) => (
        <Link
          key={i}
          href={item.path}
          className={cn('nav-item px-8 py-3 border-[1px] rounded-lg', {
            'border-primary font-semibold': pathname === item.path,
          })}
        >
          {item.title}
        </Link>
      ))}
    </section>
  )
}
