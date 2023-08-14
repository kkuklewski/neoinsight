import Image from 'next/image'
import Hero from './components/Hero'
import HowItWorks from './components/how-it-works'
import FeaturesTwo from './components/features'

export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HowItWorks />
        <FeaturesTwo />
      </main>
    </>
  )
}
