import React from 'react'

const Loader = () => {
  return (
    <span className="flex justify-center h-50 w-50 m-10">
        <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-6 w-6 bg-white"></span>
    </span>
  )
}

export default Loader