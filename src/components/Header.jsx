import { useContext, useState, useEffect } from 'react'
import search from '../assets/searchIcon.svg'
import { ImageContext } from '../App'

const Header = () => {

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
    <div className={`bg-[url('/src/assets/bg.svg')] bg-no- w-full flex items-center py-28`}>
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
            value={searchTerm}
            onChange={handleSearch}
            onKeyDown={handleSearchData}
          />
        </div>
      </div>
    </div>
  )
}

export default Header