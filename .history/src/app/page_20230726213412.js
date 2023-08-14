import Image from 'next/image'
import Hero from './components/Hero'
import HowItWorks from './components/how-it-works'
import Testimontials from './components/testimontials'

export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HowItWorks />
        <Testimontials />
      </main>
    </>
  )
}
