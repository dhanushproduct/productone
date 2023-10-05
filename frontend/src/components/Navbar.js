import React from 'react'

export default function Navbar() {
  return (
  <div className=' w-full h-[10vh] bg-[#6640cd9a] max-h-[70px] rounded'>
      <div className='flex h-full w-full justify-between items-center px-4'>
        <div className=' bg-[#51369b9a] p-3 rounded-2xl hover:bg-[#3c2872d6] duration-300'>
          product One
        </div>
        <div className='flex justify-between gap-5 '>
          <button className="btn px-3 py-2 rounded-lg hover:bg-white hover:text-purple-600 hover:border-purple-600 hover:translate-y-[-2px] duration-1000 ease-in-out uppercase text-lg border-2 border-[#51369b9a] hover:border-0 ">login</button>
          <button className="btn px-3 py-2 rounded-lg bg-[#51369b9a] text-white hover:bg-[#6640cd9a] hover:text-black  hover:border-purple-600 hover:translate-y-[-2px] duration-1000 ease-in-out uppercase text-lg ">sign up</button>
          
        </div>
      </div>
    </div>
  )
}
