import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AboutImg from '../public/assets/about.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-10 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#044CD0]'>About</p>
                <h2 className='py-4'>Who Am I?</h2>
                <p className='py-2 text-gray-600'>
                    I am a fresh graduate student from Bunda Mulia University majoring in
                    information systems.
                </p>
                <p className='py-2 text-gray-600'>
                I started to like  creating web-based application design because of 
                my fondness for technology. <br/>At First, I felt that creating a web-based 
                application was really confusing and difficult. but in the end I started 
                to like making web-based applications and find it quite fun, if we start 
                to understand it.
                </p>
                <p className='py-2 text-gray-600'>
                I am currently learning to develop my skills in the field of making 
                web-based applications,<br/> both front-end and back-end.
                </p>
                <Link href='/#projects'>
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                    Check out some of my projects down below!
                </p>
                </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src={AboutImg} className='rounded-xl' alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About