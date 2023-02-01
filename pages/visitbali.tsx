import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import visitbaliImg from "../public/assets/projects/visitbali.jpg";

const visitbali = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"></div>
        <Image
          className="absolute z-1 object-cover"
          src={visitbaliImg}
          fill
          alt="/"
        />
        <div
          className="absolute top-[70%] max-w-[1240px] w-full 
            left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]
            text-white z-10 p-4"
        >
          <h2 className="py-2">VISITBALI.</h2>
          <h3>React.js / Tailwind CSS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-3 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase tracking-widest text-[#044cd0]">
            Project Overview
          </p>
          <p>
            This application is made with React.js, Tailwind CSS and deployed on
            Vercel, This application was made with the aim of helping tourists
            to find destinations and places to stay in Bali.
          </p>
          <p className="py-2">
            In this application users can see tourist destinations in Bali and
            also make reservations for several accommodations in Bali.
          </p>
          <button className="font-semibold px-8 py-2 mt-6 hover:scale-105 ease-in duration-300">
            <a href="https://visitbali.vercel.app">Preview</a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/">
          <p className="underline font-semibold cursor-pointer hover:text-[#044cd0]">
            Back to Home
          </p>
        </Link>
      </div>
    </div>
  );
};

export default visitbali;
