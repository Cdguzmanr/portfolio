import React from 'react'
import Image from "next/image";
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import ProfilePicture from "../assets/profile-square.jpg"

const Profile = () => {
  return (
    <div className="bg-gradient-to-b from-[#2D2928] to-[#151316] text-white min-h-screen lg:min-h-full flex flex-col items-center justify-center p-6 md:flex-row md:items-start md:p-20 shadow-lg rounded-xl my-20 mx-10">
      <div className="relative rounded-full w-40 h-40 md:w-80 md:h-80 overflow-hidden">
        <Image src={ProfilePicture} alt="profile picture" className='object-cover' layout="fill" />
      </div>

      <div className="mt-10 md:mt-0 md:ml-10 text-center md:text-left flex flex-col items-center md:items-start">
        <h2 className="text-3xl py-2 text-white font-medium md:text-5xl">
          Carlos Guzman
        </h2>
        <h3 className="text-xl py-2 md:text-2xl">Software Developer</h3>

        {/* email */}

        <p className="text-md py-5 leading-8 text-white md:text-lg max-w-xl">
          Freelancer providing services for programming and business content needs. 
        </p>

        <div className="text-3xl flex gap-8 py-3">
          <a href="https://www.linkedin.com/in/carlosd-guzman/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
          <a href="https://github.com/Cdguzmanr" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
