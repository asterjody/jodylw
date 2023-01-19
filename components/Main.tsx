import React from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Welcome to My Portofolio</p>
                <h1 className='py-1 text-gray-700'>Hi, My Name is <span className='text-[#044CD0]'>Jody</span></h1>
                <h1 className='py-1 text-gray-700'>A Web Developer</h1>
                <p className='py-3 text-gray-600 max-w-[70%] m-auto'>
                    I&apos;m a Web Developer specializing in building and designing web applications. 
                    Currently, I&apos;m focused on developing my skills to build a web applications.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <a
                    href='https://www.linkedin.com/in/jody-wijaya-052b31151/'
                    target='_blank'
                    rel='noreferrer'
                    >
                        <FaLinkedinIn />
                    </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <a
                        href='https://github.com/asterjody'
                        target='_blank'
                        rel='noreferrer'
                    >   
                        <FaGithub />
                    </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <a
                        href='https://www.instagram.com/jodywjy_/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <FaInstagram />
                    </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <a
                        href='mailto:leonardojody26@gmail.com'
                        target='_blank'
                        rel='noreferrer'
                        >
                        <AiOutlineMail />
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main