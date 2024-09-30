"use client"
import React from 'react'

export const TabButton = ({active, selectTab, children}) => {
  const buttonClasses = active ? 'text-[#2f4156] bg-[#203952] rounded-[50px] shadow- p-4' : 'text-[#ADB7BE]'
  return (
    <section>
        <button onClick={selectTab}> 
            <p className={`mr-3 font-semibold bg-[#203952] p-4 hover:text-white ${buttonClasses}`}>
              {children} 
            </p> 
        </button>
    </section>
  )
}
