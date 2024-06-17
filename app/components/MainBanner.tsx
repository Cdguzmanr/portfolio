import React from "react";
import Image from "next/image";
import videoBanner from "../assets/videoBanner1.mp4"

const VideoBanner = () => {
  return (   

    <div className="relative h-screen w-full">

      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videoBanner.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="relative z-10 flex flex-col items-start justify-center h-full  px-8 bg-black bg-opacity-50">
        <h1 className="text-white text-5xl md:text-7xl font-bold">Work Ready</h1>
        <p className="text-white text-lg md:text-2xl mt-4">Yes, I made this UwU</p>
      </div>
    </div>

  )
}

export default VideoBanner