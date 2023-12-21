import React from 'react'

export default function TimelineComponent() {
  return (
    <div className=' p-4 m-2 '>
      <div className=' flex gap-8'>
        <div className='h-[50px]  aspect-square bg-slate-400'></div>
        <div>
          <h1>Title</h1>
          <p className='text-sm'>company</p>
          <p className='text-sm text-gray-600'>from - to</p>
          <p className=''> <b>
            skills:
            </b>
             a, b, c</p>
        </div>
      </div>
      {/* <div className='w-full flex justify-center my-4'>

      <div className='h-[2px] bg-slate-200 w-[95%]'></div>
      </div> */}
      <hr className=' text-center w-[95%] mt-4' />
    </div>
  )
}
