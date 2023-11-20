import expo from '@public/images/expo.png'
import js from '@public/images/js.png'
import nextjs from '@public/images/nextjs.png'
import Image from 'next/image'

const TECH_STACK = [
  {
    title: 'JavaScript / TypeScript',
    description:
      'JavaScript and TypeScript, with their unified codebase and cross-platform capabilities, serve as a powerful duo for developing seamless and efficient applications that run seamlessly across various platforms.',
    icon: js,
  },
  {
    title: 'React.js / Next.js',
    description:
      'React.js, with its declarative and component-based architecture, combined with Next.js for server-side rendering and effortless scalability, forms an ideal tandem for building high-performance and SEO-friendly web applications with a delightful user experience.',
    icon: nextjs,
  },
  {
    title: 'React Native / Expo',
    description:
      'React Native, in synergy with Expo, offers a compelling solution for mobile app development, providing a single codebase for both iOS and Android platforms, rapid development cycles, and a rich set of pre-built components, fostering efficient and seamless cross-platform mobile application development.',
    icon: expo,
  },
]

export function TechStack() {
  return (
    <section className="tech-stack mb-24">
      <h3 className="font-semibold font-display text-2xl text-primary mb-4">
        Technologies Stack
      </h3>
      <p className="max-w-2xl mb-14">
        A fusion of powerful programming languages, robust frameworks, and
        state-of-the-art tools to empower projects with cutting-edge efficiency
      </p>
      <div className="grid grid-flow-row lg:grid-flow-col gap-6 text-black">
        {TECH_STACK.map((tech) => (
          <div key={tech.title} className="bg-[#F9F9F9] p-6 rounded-2xl">
            <div className="flex items-center mb-6">
              <Image
                alt={tech.title}
                src={tech.icon}
                className="w-12 aspect-square mr-4"
              />
              <div className="flex-1 font-semibold font-display">
                {tech.title}
              </div>
            </div>
            <div>{tech.description}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
