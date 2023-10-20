import React from 'react'
import loading from '../assets/loading.gif'

const Loading = () => {
  return (
    <div className='flex flex-col justify-center bg-white h-screen items-center'>
        <img src={loading} className='w-1/4 ' alt="" />
        <div className='text-2xl font-bold text-[#A7A7A7] text-center'>
            Loading some awesome <br /> Images...
        </div>
    </div>
  )
}

export default Loading