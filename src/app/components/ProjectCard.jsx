import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'
import Link from "next/link"


const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => (
    
    <div>
    <div 
        className='h-52 md:h-72 rounded-t-xl relative group'
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
    >
        <div className="overlay top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all hover:rounded-t duration-500 flex items-center justify-center">
            <Link href={gitUrl} className='relative rounded-full'>
                <CodeBracketIcon className='h-10 w-10 text-transparent m-2 cursor-pointer hover:text-white' />
            </Link>
            <Link href={previewUrl} className='relative rounded-full'>
                <EyeIcon className='h-10 w-10 text-transparent m-2 cursor-pointer hover:text-white' />
            </Link>
        </div>
    </div>
    <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
    </div>
    </div>
)

export default ProjectCard