import Hero from './components/Hero'
import ThreeColumn from './sections/three-column'
import PatientData from './sections/patitent-data'
import LeadingSection from './sections/leading-indications'
import Sponsors from './sections/sponsors'

export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ThreeColumn />
        <PatientData />
        <LeadingSection />
        <Sponsors />
      </main>
    </>
  )
}
