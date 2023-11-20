import github from '@public/images/github.png'
import instagram from '@public/images/instagram.png'
import linkedin from '@public/images/linkedin.png'
import avatar from '@public/images/profile.png'
import twitter from '@public/images/twitter.png'
import youtube from '@public/images/youtube.png'
import Image from 'next/image'
import Link from 'next/link'

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jeserodriguez',
    icon: linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/jeserodz',
    icon: github,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/jeserodz',
    icon: twitter,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/jeserodz',
    icon: instagram,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UC60oA825AcILvcXEuUbYwFg',
    icon: youtube,
  },
]

export function Hero() {
  return (
    <section className="mt-9 mb-24">
      <Image
        alt="avatar"
        src={avatar}
        className="avatar w-[150px] h-[150px] rounded-full mb-8"
      />
      <h1 className="font-semibold font-display text-primary text-3xl">
        Jese Rodriguez
      </h1>
      <h2 className="font-semibold font-display text-3xl lg:text-6xl mb-6">
        Software Developer
      </h2>
      <p className="max-w-2xl mb-6">
        Greetings! I&apos;m Jese Rodriguez, a dedicated web developer with a
        profound passion for translating concepts into captivating digital
        experiences. My journey in the world of coding is marked by a commitment
        to innovation and user-centric design.
      </p>
      <div className="social-links grid grid-flow-col justify-start gap-6">
        {SOCIAL_LINKS.map((link) => (
          <Link key={link.name} href={link.url} target="_blank">
            <Image
              alt={link.name}
              src={link.icon}
              className="social-link w-8 h-8"
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
