import { createContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './containers/Home'
import Loading from './components/Loading'
import useAxios from './hooks/useAxios'

export const ImageContext = createContext()
const App = () => {

  const [darkTheme, setDarkTheme] = useState(false)
  const { res, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=office&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`);
  const value = {
    res,
    isLoading,
    error,
    fetchData
  }


  return (
    <ImageContext.Provider value={value}>
      <div className='bg-white dark:bg-black dark:text-white'>
        <Navbar theme={darkTheme} setTheme={setDarkTheme} />
        <div>
          {
            isLoading ? <Loading />

              :
              <Home />

          }
        </div>
      </div>
    </ImageContext.Provider>
  )
}

export default App