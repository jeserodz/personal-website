import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Navigation } from '@/components/Navigation'
import { TechStack } from '@/components/TechStack'
import { WorkExperience } from '@/components/WorkExperience'

export default function Page() {
  return (
    <main className="container mx-auto bg-zinc-900 p-10 lg:p-20 dark:ring-zinc-300/20 ring-1">
      <Navigation />
      <Hero />
      <WorkExperience />
      <TechStack />
      <Footer />
    </main>
  )
}
