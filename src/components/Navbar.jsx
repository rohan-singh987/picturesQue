import React, { useContext, useEffect, useState } from 'react'
import logo from '../assets/ImageGallery.svg'
import logoDark from '../assets/imgGaldark.svg'
import menu from '../assets/menu1.svg'
import { Switch } from '@mui/material'
import search from '../assets/searchIcon.svg'
import { ImageContext } from '../App'


const Navbar = ({ theme, setTheme }) => {

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark")
    }
    else {
      document.documentElement.classList.remove("dark")
    }
  })

  const [searchTerm, setSearchTerm] = useState("")
  const { fetchData } = useContext(ImageContext)

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSearchData = (e) => {
    if(e.key == 'Enter')
    {
      fetchData(`search/photos?page=1&query=${searchTerm}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`)
      setSearchTerm("")
    }
  }

  return (
    <div className='flex md:justify-around justify-between px-5 py-4'>
      <div>
        {!theme ?
          <img src={logo} alt="" />
          :
          <img src={logoDark} alt="" />
        }
      </div>
      <div className='md:flex hidden bg-[#FAFAFA] rounded-md border-[#ECECEC] shadow-inner '>
        <img src={search} alt="" className='mx-4 w-4' />
        <input type="search"
          className=' border-solid lg:w-60 md:w-40  py-1.5 bg-[#FAFAFA] rounded-md border-[#ECECEC] shadow-inner mr-4 text-black placeholder:font-medium placeholder:text-[#C4C4C4] placeholder:text-sm outline-none	  '
          placeholder='Search Images here' 
            value={searchTerm}
            onChange={handleSearch}
            onKeyDown={handleSearchData}
          />
      </div>

      <div className='md:flex items-center hidden'>
        <div className='flex gap-5 lg:mr-28 font-bold text-sm '>
          <a href="">Explore</a>
          <a href="">Connection</a>
          <a href="">Community</a>
        </div>
        <div className='flex justify-end items-center lg:ms-11 font-bold text-sm'>
          <span> {!theme ? "Dark" : "light"} mode </span>
          <Switch onChange={() => { setTheme(!theme) }} />
        </div>
      </div>

      <div className='flex justify-center items-center md:hidden '>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
          <path d="M11.9607 13L16.9443 18" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" />
          <path d="M14.2008 7.5C14.2008 11.2302 11.1874 14.25 7.47539 14.25C3.76338 14.25 0.75 11.2302 0.75 7.5C0.75 3.76975 3.76338 0.75 7.47539 0.75C11.1874 0.75 14.2008 3.76975 14.2008 7.5Z" stroke="#4F4F4F" stroke-width="1.5" />
        </svg>
        <img src={menu} className='ms-5' alt="" />
      </div>
    </div>
  )
}

export default Navbar