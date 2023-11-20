import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'

export default function Blog() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col p-20">
      <Navigation />
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <h1 className="font-display font-semibold text-xl text-primary mb-4">
          Blog
        </h1>
        <h2 className="text-6xl">Coming Soon</h2>
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  )
}
