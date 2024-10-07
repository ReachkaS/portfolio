import React from 'react'

const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
];
const contactIcon = [
    {
        id: 'Facebook', link: 'https://www.facebook.com/profile.php?id=100008254024383&mibextid=LQQJ4d', path: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'
    }, {
        id: 'LinkedIn', link: 'https://www.linkedin.com/in/reachka-sum-a629792a5/', path: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z'
    }, {
        id: 'sreachka@gmail.com', path: 'M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z'
    },
    {
        id: 'Instagram', link: 'https://www.instagram.com/r_e_a_c_h_sss/', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
    },
    {
        id: 'Github', link: 'https://github.com/ReachkaS', path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
    }
];
const Contact = () => {
    return (
        <footer class=" text-center text-dark dark:text-neutral-200 rounded-se-2xl rounded-ss-2xl md:mt-5" id='contact'>
            <hr className='w-1/2 border-black mx-auto' />
            <div class="w-full mx-auto max-w-screen-xl p-4 sm:justify-center md:flex md:items-center md:justify-between">
                <div class="mr-12 flex text-center justify-center font-medium md:block  animate-bounce">
                    <span>Let&apos;s Get In Touch</span>
                </div>
                <div class="flex justify-center items-center">
                    <ul className='social-links flex flex-wrap'>
                        {contactIcon.map((link, index) => (
                            <div key={index}>
                                <a href={link.link} className="social-btn flex-center">
                                    <svg id={link.id} viewBox="0 0 25 25" fill="#1877F2" height="20" width="20">
                                        <path d={link.path}></path>
                                    </svg>
                                    <span>{link.id}</span>
                                </a>
                            </div>
                        ))}
                    </ul>

                </div>
            </div>

            <div class="mx-6 pb-4 text-center">

                <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
                    <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 ">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <button href={link.href} class="me-4 md:me-6">{link.title}</button>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className='mb-5'> 
                <button><a href="/images/CV.pdf" download><span className='text-center text-sm font-medium text-gray-500 '>Download CV</span></a></button>
                </div>

                <div class="mb-6">
                    <h5 class="mb-2 font-bold uppercase">Explore Our World</h5>
                    
                    <p class="mb-4">
                        Embark on an adventure of a lifetime and uncover hidden
                        wonders. Let my journey begins now!
                    </p>
                </div>

            </div>

        </footer>

    )
}
export default Contact