"use client";
import React, { useState, useRef, ref } from 'react';
import { useInView } from "framer-motion";
import Image from 'next/image';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="education-list">
                <li className="education-item">
                    <div className="degree">Building Responsive Websites</div>
                    <div className="institution">Ensuring that my projects look great on all devices.</div>
                </li>
                <li className="education-item">
                    <div className="degree">Collaborating on Projects:</div>
                    <div className="institution">Working closely with designers and back-end developers to bring ideas to life.</div>
                </li>
                <li className="education-item">
                    <div className="degree">Creating Intuitive User Interfaces:</div>
                    <div className="institution">Focusing on usability and accessibility.</div>
                </li>
            </ul>
        ),
        images: [
            <Image key="skills-image1" src="/images/batch_certificates.png" alt="Skill image 1" width={500} height={300} />,

        ]
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="education-list">
                <li className="education-item">
                    <div className="institution">3 months of experience as an intern in web development.</div>
                </li>
                <li className="education-item">
                    <div className="degree">Engineering of Technology and Electronic Center:</div>
                    <div className="institution">Basic/Advance C/C++/OOP & Project Courses, HTML, CSS, Bootstrap, JavaScript, jQuery & Project Courses</div>
                </li>
                <li className="education-item">
                    <div className="degree">Instinct Institute:</div>
                    <div className="institution">Adobe Photoshop, Adobe Illustrator</div>
                </li>
            </ul>
        ),
        images: [
            <Image key="certifications-image1" src="/images/ETEC.jpg" alt="Certification image 1" width={200} height={300} />,
            <Image key="certifications-image2" src="/images/6.jpg" alt="Certification image 2" width={200} height={300} />,
            <Image key="certifications-image3" src="/images/Opentech.jpg" alt="Certification image 3" width={200} height={300} />,
        ]
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="education-list">
                <li className="education-item">
                    <div className="degree">Bachelor of Information Technology</div>
                    <div className="institution">Royal University of Phnom Penh</div>
                    <div className="date">2022 - Present</div>
                </li>
                <li className="education-item">
                    <div className="degree">Intensive English for Academic Purpose</div>
                    <div className="institution">Beltei International School</div>
                    <div className="date">2017 - 2023</div>
                </li>
                <li className="education-item">
                    <div className="degree">Graduated High School</div>
                    <div className="institution">Prek Eng High School</div>
                    <div className="date">2019 - 2022</div>
                </li>
            </ul>
        ),
        images: [
            <Image key="education-image1" src="/images/Beltei.jpg" alt="Education image" width={200} height={300} />
        ]
    },
    {
        title: "Work Experience",
        id: "work experience",
        content: (
            <ul className="education-list">
                <li className="education-item">
                    <div className="degree">Ministry of Interior</div>
                    <div className="date">July 2024 - October 2024</div>
                    <div className="institution">Frontend Developer Internship</div>
                    <div className="institution">- Developed and maintained web applications using HTML, CSS, and JavaScript.</div>
                    <div className="institution">- Collaborated with designers to implement responsive UI components.</div>
                    <div className="institution">- Participated in code reviews and contributed to team discussions on best practices.</div>
                </li>
                <li className="education-item">
                    <div className="degree">RYL cambodia Volunteer</div>
                    <div className="date">October 2024</div>
                </li>
                <li className="education-item">
                    <div className="degree">Volunteer - RUPP The 14th Charity and 65th Aniversary</div>
                    <div className="date">January 2025</div>
                </li>

            </ul>
        ),
        images: [
            <Image key="skills-image1" src="/images/ryl.JPG" alt="Skill image 1" width={200} height={300} />,
        ]
    },
];
const Certification = [
    <Image key="certifications-image1" src="/images/ETEC.jpg" alt="Certification image 1" width={200} height={300} />,
    <Image key="certifications-image2" src="/images/6.jpg" alt="Certification image 2" width={200} height={300} />,
    <Image key="certifications-image3" src="/images/Opentech.jpg" alt="Certification image 3" width={200} height={300} />,
    <Image key="skills-image1" src="/images/ryl.JPG" alt="Skill image 1" width={200} height={300} />,
    <Image key="education-image1" src="/images/Beltei.jpg" alt="Education image" width={200} height={300} />
]
const Section = ({ children }) => {
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

const TabButton = ({ selectTab, active, children }) => (
    <a type='button'
        onClick={selectTab}
        className={`p-2 cursor-pointer ${active ? 'bg-[#2f4156] rounded-full transition-all delay-150 text-white drop-shadow-xl' : 'text-[#2f4156]'}`}
    >
        {children}
    </a>
);
const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const handleTabChange = (id) => {
        setTab(id);
    };
    return (
        <section className='text-white' id='about'>
            <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16">
                <Section>

                    <div
                        className={`grid gap-14 py-8 xl:gap-8 ${tab === 'skills'
                                ? 'grid-cols-1'
                                : 'grid-cols-1 md:grid-cols-3'
                            }`}
                    >
                        {TAB_DATA.find((t) => t.id === tab).images}
                    </div>
                    <p className='text-[#2f4156] m-1 text-lg lg:text-xl mb-6 text-wrap text-justify font-medium'>
                        A passionate Frontend Developer with a love for crafting engaging and intuitive web experiences. With a strong foundation in HTML, CSS, and JavaScript, I thrive on turning ideas into reality. I believe in the power of clean, user-friendly design and responsive interfaces that not only look great but also provide seamless functionality. Let’s bring your vision to life together!
                    </p>
                </Section>
                <Section>
                    <h2 className='text-3xl lg:text-5xl font-bold text-[#2f4156] mb-4 '>So who am I?</h2>
                    <p className='text-base lg:text-lg text-[#2f4156] text-justify'>
                        I am a dedicated Frontend Developer based in Phnom Penh. With a passion for creating dynamic and responsive web applications, I strive to enhance user experiences through innovative design and clean code. I began my journey in web development after discovering my love for coding while studying computer science. Since then, I have honed my skills in HTML, CSS, and JavaScript, and I am well-versed in frameworks like Next.js and Vue.js.
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                        <TabButton selectTab={() => handleTabChange("work experience")} active={tab === "work experience"}>Work</TabButton>
                    </div>
                    <div className={`grid md:grid-cols-1 mt-2 ${tab === 'work experience' ? 'lg:grid-cols-1' : 'lg:grid-cols-2'}`}>
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </Section>
            </div>
            <div className="certification-section">

                <div className="certifications-container">

                    <ul ref={ref} className="certifications grid grid-cols-1 md:grid-cols-3 gap-14 py-8 xl:gap-8">
                        {Certification.map((item, index) => (
                            <li key={`certification-item-${index}`} className='flex md:grid-cols-2 gap-14 py-8 xl:gap-8'>
                                {item}
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
        </section>
    );
};

export default AboutSection;