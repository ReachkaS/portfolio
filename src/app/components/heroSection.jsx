"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'
function heroSection() {

  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12" id='home'>
            <div className="col-span-12 place-self-center text-center sm:text-left absolute">
            <h1 className="text-white mb-4 text-4xl sm:text-9xl lg:text-9xl font-extrabold header-title"><span className='text-transparent bg-clip-text drop-shadow-xl bg-gradient-to-r from-[#EAD8B1] via-[#6A9AB0] to-[#C5705D]'>Hello, I&apos;m {""}</span>
                <br />
                <TypeAnimation
                    sequence={[
                        'Reachka',1000,
                        'Frontend Developer',1000,
                    ]}
                    wrapper="span"
                    speed={10}
                    style={{ fontSize: '0.9em', display: 'inline-block', textShadow: 'revert' }}
                    repeat={Infinity}
                    />    
                </h1>
            </div>
            <div className="col-span-12  place-self-center text-center sm:text-left relative">
                <Image src="/images/profile1.png" alt="about image" width={500} height={500} className='drop-shadow-xl'/>
            </div>
        </div>
    </section>
    
  )
}

export default heroSection;