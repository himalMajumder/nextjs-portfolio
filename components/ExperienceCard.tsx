import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden' >
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src='./himal.jpg'
                alt=''
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>CEO of PAPAFM</h4>
                <p className='font-bold text-2xl mt-1'>PAPAFM</p>
                <div className='flex space-x-2 my-2'>
                        <Image 
                            src='https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png'
                            className='h-10 w-10 rounded-full'
                            width={500}
                            height={500} 
                            alt="html"
                        /> 
                        <Image 
                            src='https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png'
                            className='h-10 w-10 rounded-full'
                            width={500}
                            height={500} 
                            alt="html"
                        />   
                    {/* <img
                        className='h-10 w-10 rounded-full'
                        src='https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png'
                        alt=''
                    /> */}
                </div>
                <p className='uppercase py-5 text-gray-300'>Starting work... Ended...</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li className=''>Summary Points Summary Points Summary Points Summary Points</li>
                    <li className=''>Summary Points Summary Points Summary Points Summary Points</li>
                    <li className=''>Summary Points Summary Points Summary Points Summary Points</li>
                    <li className=''>Summary Points Summary Points Summary Points Summary Points</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard