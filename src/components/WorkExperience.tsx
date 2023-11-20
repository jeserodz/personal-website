import adk from '@public/images/adk.png'
// import bodi from '@public/images/work-bodi.png'
import bodi from '@public/images/bodi.webp'
import oue from '@public/images/oue.png'
import Image from 'next/image'

const WORK_EXPERIENCE = [
  {
    project: 'BODi',
    position: 'Web & Video Streaming Developer',
    description:
      'BODi is a digital fitness streaming service offered by Beachbody, a renowned fitness and wellness company.',
    thumbnail: bodi,
  },
  {
    project: 'Genome - Adirondack Snowmobile',
    position: 'Mobile Developer (iOS & Android) - React Native',
    description:
      'Travel and sports app that allows snowmobilers to plan their adventures throughout the Adirondack (ADK) Park.',
    thumbnail: adk,
  },
  {
    project: 'Genome - OUE Skyspace',
    position:
      'Full-Stack Developer (Web, iOS & Android) - React & React Native',
    description:
      'Augment your view of Los Angeles from DTLA’s tallest open-air observatory.',
    thumbnail: oue,
  },
]

export function WorkExperience() {
  return (
    <section className="work-experience mb-24">
      <h3 className="font-semibold font-display text-2xl text-primary mb-4">
        Work Experience
      </h3>
      <p className="max-w-2xl mb-14">
        Since 2016, I&apos;ve immersed myself in software development,
        specializing in crafting dynamic web and mobile applications. Proficient
        in JavaScript, TypeScript, Node.js, React, and Angular, I&apos;ve
        seamlessly blended front-end and back-end expertise. My commitment to
        agile methodologies and best practices in Git has ensured efficient
        collaboration within diverse development teams, while my continuous
        pursuit of emerging technologies keeps my work at the forefront of the
        industry.
      </p>
      <div className="grid grid-flow-row lg:grid-flow-col gap-6">
        {WORK_EXPERIENCE.map((work) => (
          <div
            key={work.project}
            className="rounded-2xl ring-white ring-1 overflow-hidden"
          >
            <Image
              className="w-full aspect-[306/218] object-cover"
              src={work.thumbnail}
              alt={work.position}
            />
            <div className=" p-4">
              <p className="text-sm text-primary font-semibold font-display mb-2">
                {work.project}
              </p>
              <p className="font-semibold font-display mb-4">{work.position}</p>
              <p>{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
