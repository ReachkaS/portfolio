import React from 'react'

const ProjectTags = ({ name, onClick, isPending }) => {
    const buttonClicked = isPending ? ' border-[#2f4156] text-[#2f4156]' : ' border-slate-400 text-[#ADB7BE]'
    return (
        <button className={`rounded-full border-2 px-5 py-1 my-5 mx-1 ${buttonClicked}`} onClick={()=>onClick(name)}>{name}</button>
    )
}
export default ProjectTags