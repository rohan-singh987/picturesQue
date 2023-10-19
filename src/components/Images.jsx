import React from 'react'

const Images = ({ data }) => {
  return (
    <div>
        <div>
            <img src={data.urls.small} alt={data.alt_description} />
        </div>
    </div>
  )
}

export default Images