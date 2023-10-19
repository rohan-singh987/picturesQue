import React, { useContext } from 'react'
import Header from '../components/Header'
import Images from '../components/Images'
import { ImageContext } from '../App'


const Home = () => {

    const { res } = useContext(ImageContext)

    return (
        <div>
            <Header />

            <div className=' p-5 md:p-10'>
                <div className='columns-2 md:columns-3 gap-6'>
                    {res.map((data, key) =>
                        <Images key={key} data={data} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home