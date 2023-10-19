import React, { useEffect } from 'react'
import logo from '../assets/ImageGallery.svg'
import logoDark from '../assets/imgGaldark.svg'
import { Switch } from '@mui/material'

const Navbar = ({theme,setTheme}) => {

  useEffect(() => {
    if(theme)
    {
      document.documentElement.classList.add("dark")
    }
    else
    {
      document.documentElement.classList.remove("dark")
    }
  })

  return (
    <div className='flex justify-between'>
        <div>
          {!theme ? 
            <img src={logo} alt="" />
            :
            <img src={logoDark} alt="" />
          }
        </div>
        <div>
            <input type="search" name="" className=' border-solid w-/ ' id="" />
        </div>
        <div>
            <a href="">Explore</a>
            <a href="">Connection</a>
            <a href="">Community</a>
        </div>
        <div>
        <Switch onChange={() => {setTheme(!theme)}}  />
        </div>
    </div>
  ) 
}

export default Navbar