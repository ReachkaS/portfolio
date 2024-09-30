"use client";
import React, {useRef} from 'react'
import { TypeAnimation } from 'react-type-animation';
import { useInView } from "framer-motion";
function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref}>
            <span
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                }}
            >
                {children}
            </span>
        </section>
    );
}
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
                <img src="./images/profile1.png" alt="about image" width={500} height={500} className='drop-shadow-xl'/>
            </div>
        </div>
    </section>
    
  )
}

export default heroSection;