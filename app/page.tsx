import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className='snap-center'>
        <Hero />
      </section>

      {/* About  */}

      {/* Experience  */}

      {/* Skills  */}

      {/* Project  */}

      {/* Contact Me  */}
      
    </main>
  )
}
