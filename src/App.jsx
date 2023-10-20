import { createContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './containers/Home'
import Loading from './components/Loading'
import useAxios from './hooks/useAxios'

export const ImageContext = createContext()
const App = () => {

  const [darkTheme, setDarkTheme] = useState(false)
  const { res, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=trending&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`);
  const value = {
    res,
    isLoading,
    error,
    fetchData
  }
  console.log(res);


  return (
    <ImageContext.Provider value={value}>
      <div className='min-h-screen bg-gradient-to-r from-[#ecc8e9] via-[#F3DCDC] to-[#99f2f7] dark:bg-gradient-to-r dark:from-[#2D4356] dark:to-[#040D12] dark:text-white'>
        <div className='max-w-screen-2xl mx-auto'>
          <Navbar theme={darkTheme} setTheme={setDarkTheme} />
        <div className='pb-20'>
          {
            isLoading ? <Loading />

              :
              <Home />

          }
        </div>
        </div>
      </div>
    </ImageContext.Provider>
  )
}

export default App