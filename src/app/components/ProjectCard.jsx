import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'
import Link from "next/link"


const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => (

<div>
    <div
        className='h-52 md:h-72 rounded-xl relative group'
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
    >
        <div className="overlay absolute rounded-xl top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500"></div>

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link href={gitUrl} className='relative rounded-full' aria-label="View code">
                <CodeBracketIcon className='h-10 w-10 text-white m-2 cursor-pointer' />
            </Link>
            <Link href={previewUrl} className='relative rounded-full' aria-label="Preview project">
                <EyeIcon className='h-10 w-10 text-white m-2 cursor-pointer' />
            </Link>
        </div>

        <div className="absolute group-hover:bg-[#2f4156] bottom-0 mx-auto rounded-b-xl py-6 px-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {title && <h5 className='text-white text-xl font-semibold mb-2'>{title}</h5>}
            {description && <p className='text-[#ADB7BE]'>{description}</p>}
        </div>
    </div>
</div>
)

export default ProjectCard