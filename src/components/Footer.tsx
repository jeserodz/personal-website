'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/components/Navigation'
import { cn } from '@/utils/tailwind.util'

export function Footer() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col lg:flex-row justify-between lg:pt-14 pb-4">
      <div className="grid grid-flow-row lg:grid-flow-col gap-7">
        {NAV_LINKS.map((item, i) => (
          <Link
            key={item.title}
            href={item.path}
            className={cn(
              'border-l-[1px] border-white pl-2 lg:border-l-0 lg:pl-0',
              {
                'font-semibold border-primary': pathname === item.path,
              },
            )}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="mt-12 lg:mt-0">
        © 2023 Jese Rodriguez. All rights reserved.
      </div>
    </div>
  )
}
