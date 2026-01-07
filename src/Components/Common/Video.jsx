import React from 'react'

const Video = ({video,className = ""}) => {
  return (
    <div className='h-full w-full'>
        <video src={video} autoPlay loop muted className={`${className}`} ></video>
      
    </div>
  )
}

export default Video
