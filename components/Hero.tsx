"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import Link from 'next/link'
import MyImage from '../public/himal.jpg'
import Image from 'next/image'

type Props = {}

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Names Himal Majumder",
      "Guy-who-loves-coffee.tsx",
      "<ButLovesToCodeMore />"
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      {/* <img className='relative rounded-full h-32 w-32 mx-auto'
        src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
      /> */}
      <Image src={MyImage} className='relative rounded-full h-32 w-32 mx-auto' alt='' />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'> {text} </span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
        <div className='pt-5'>
          <Link href='#about' ><button className='heroButton'>About</button></Link>
          <Link href='#experience' ><button className='heroButton'>Experience</button></Link>
          <Link href='#skills' ><button className='heroButton'>Skills</button></Link>
          <Link href='#projects' ><button className='heroButton'>Projects</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero