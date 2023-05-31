import React from 'react'

const VideoProject = (src) => {
  return (
    <iframe
      width="400"
      height="315"
      src={src}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  )
}

export default VideoProject