import { useState } from 'react'
import search from '../assets/searchIcon.svg'

const Header = () => {

  const [searchTerm, setSearchTerm] = useState("")

  
  return (
    <div className={`bg-[url('/src/assets/bg.svg')] w-full flex items-center py-28`}>
        <div className='mx-auto  w-full text-white flex flex-col justify-center items-center'>
            <h1 className='font-bold text-4xl '>
                Download High Quality Images by creators
            </h1>
            <h2 className='font-medium text-sm text-[#C4C4C4] my-3'>
              Over 2.4 million+ stock Images by our talented community
            </h2>
            <div className='flex bg-white rounded-lg w-1/2'>
              <img src={search} alt="" className='mx-4' />
              <input type="search" 
                className=' py-3 w-full mr-4 text-black placeholder:font-medium placeholder:text-[#C4C4C4] placeholder:text-sm outline-none rounded-lg' 
                placeholder='Search high resolution Images, categories, wallpapers' 
                value={}
              />
            </div>
        </div>
    </div>
  )
}

export default Header