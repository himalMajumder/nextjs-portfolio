"use client" 
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words : [
            "Hi, The Names Himal Majumder",
            "Guy-who-loves-coffee.tsx",
            "<ButLovesToCodeMore />"
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div>
        <h1>
        <span> {text} </span>
        <Cursor cursorColor='#F7AB0A' />
        </h1>
    </div>
  )
}

export default Hero