import React from 'react'
import likes from '../assets/like.svg'

const Images = ({ data }) => {
    return (
        <div className='mb-10 border-solid  '>
            <div className='flex flex-col my-'>
                <img src={data.urls.small} alt={data.alt_description} className='rounded-t-lg'  />
                <div className='flex justify-between items-center border-[#E5E5E5] p-3 border-2 rounded-b-lg'>
                    <div className='flex justify-between items-center'>
                        <img src={data.user.profile_image.small} className='rounded-full w-10 mr-3' alt="Profile Image" />
                        <div>
                            <p className='text-sm font-bold'> {data.user.first_name} <span>{data.user.last_name} </span> </p>
                            <p className='text-[#A7A7A7] text-xs font-semibold '>@{data.user.instagram_username}</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <img src={likes} alt="" className='w-5 mr-1' />
                        <p className='text-xs font-bold'>{data.user.total_likes}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Images