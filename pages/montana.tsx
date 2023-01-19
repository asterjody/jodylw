import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {RiRadioButtonFill} from'react-icons/ri'
import mcwImg from'../public/assets/projects/montana.jpg'

const montana = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'></div>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={mcwImg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full 
            left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]
            text-white z-10 p-4'>
                <h2 className='py-2'>Montana Car Wash</h2>
                <h3>Bootstrap / PHP / MySQL</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-3 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p className='uppercase tracking-widest text-[#044cd0]'>Project Overview</p>
                <p>This application was built using Bootstrap, PHP, MySQL and deployed on free hosting called byethost.
                In this application the user can view information about the Montana Car Wash profile, see information
                 on the queue that is running and also make a reservation to do a vehicle wash.
                </p>
                <p className='py-2'>
                  Meanwhile, in this application the admin can manage transactions, 
                  manage queues that are running, manage member data and member 
                  transaction history and see criticism and suggestions.
                </p>
                <button className='font-semibold px-8 py-2 mt-6 hover:scale-105 ease-in duration-300'>
                    <a href='http://montanacarwash.byethost15.com'>
                        Preview
                    </a>
                </button>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />HTML
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />CSS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />JavaScript
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />Bootstrap
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />PHP
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />MySQL
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

export default montana