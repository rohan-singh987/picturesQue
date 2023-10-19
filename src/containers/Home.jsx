import React, { useContext } from 'react'
import Header from '../components/Header'
import Images from '../components/Images'
import { ImageContext } from '../App'

const Home = () => {

    const {res} = useContext(ImageContext)

    return (
        <div>
            <Header />

            <div>
                {res.map((data, key) =>
                    <Images key={key} data={data} />
                )}
            </div>
        </div>
    )
}

export default Home