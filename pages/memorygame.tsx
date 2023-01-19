import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {RiRadioButtonFill} from'react-icons/ri'
import memorygameImg from'../public/assets/projects/memorygame.jpg'

const memorygame = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'></div>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={memorygameImg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full 
            left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]
            text-white z-10 p-4'>
                <h2 className='py-2'>ABCDEFGAME</h2>
                <h3>React.js</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-3 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p className='uppercase tracking-widest text-[#044cd0]'>Project Overview</p>
                <p>This application was built using React.js and deployed on Vercel.
                    In this application the user can play a game, where the user 
                    must match the next alphabet according to the previous alphabet. 
                    If the game is finished the user can restart the game 
                    by pressing the restart button.
                </p>
                <button className='font-semibold px-8 py-2 mt-6 hover:scale-105 ease-in duration-300'>
                    <a href='https://abcdefgame.vercel.app'>
                        Preview
                    </a>
                </button>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />React.js
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />CSS
                        </p>
                    </div>
                </div>
            </div>
            <Link href='/'>
                <p className='underline font-semibold cursor-pointer hover:text-[#044cd0]'>Back to Home</p>
            </Link>
        </div>

    </div>
  )
}

export default memorygame