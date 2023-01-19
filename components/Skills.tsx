import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-10 py-12'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full '>
            <p className='text-xl tracking-widest uppercase text-[#044CD0]'>Skills</p>
            <h2 className='py-4'>What Can I Do?</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/public/assets/skills/html.png'
                                width={64}
                                height={64}
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/public/assets/skills/css.png'
                                width={64}
                                height={64}
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/public/assets/skills/javascript.png'
                                width={64}
                                height={64}
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/public/assets/skills/bootstrap.png'
                                width={64}
                                height={64}
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Bootstrap</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/public/assets/skills/php.png'
                                width={64}
                                height={64}
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>PHP</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/public/assets/skills/mysql.png'
                                width={64}
                                height={64}
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MySQL</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/public/assets/skills/nextjs.png'
                                width={64}
                                height={64}
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Next.js</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/public/assets/skills/tailwind.png'
                                width={64}
                                height={64}
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/public/assets/skills/mongo.png'
                                width={64}
                                height={64}
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MongoDB</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/public/assets/skills/node-express.png'
                                width={64}
                                height={64}
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Express.js</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/public/assets/skills/react.png'
                                width={64}
                                height={64}
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React.js</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/public/assets/skills/node.png'
                                width={64}
                                height={64}
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Node.js</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/public/assets/skills/typescript.png'
                                width={64}
                                height={64}
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Typescript</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/public/assets/skills/python.png'
                                width={64}
                                height={64}
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Python</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/public/assets/skills/github1.png'
                                width={64}
                                height={64}
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Github</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/public/assets/skills/postman.png'
                                width={64}
                                height={64}
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Postman</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills