import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Image from 'next/image'
import Link from 'next/link'
import MyImage from '../public/himal.jpg'

export default function Home() {
  return (
    <main className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      {/* About  */}
      <section id="about" className='snap-center'>
        <About />
      </section>

      {/* Experience  */}
      <section id="experience" className='snap-center' >
        <WorkExperience />
      </section>

      {/* Skills  */}
      <section id="skills" className='snap-start'>
        <Skills />
      </section>

      {/* Project  */}
      <section id="projects" className='snap-start'>
        <Projects />
      </section>

      {/* Contact Me  */}
      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>
      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <Image 
              src={MyImage}
              alt='profile' 
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0' 
            /> 
          </div>
        </footer>
      </Link>
    </main>
  )
}
