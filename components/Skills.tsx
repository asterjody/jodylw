import Image from 'next/image'
import React from 'react'
import htmlImg from '/public/assets/skills/html.png'
import cssImg from '/public/assets/skills/css.png'
import javascriptImg from '/public/assets/skills/javascript.png'
import bootstrapImg from '/public/assets/skills/bootstrap.png'
import phpImg from '/public/assets/skills/php.png'
import mysqlImg from '/public/assets/skills/mysql.png'
import nextjsImg from '/public/assets/skills/nextjs.png'
import tailwindImg from '/public/assets/skills/tailwind.png'
import mongoImg from '/public/assets/skills/mongo.png'
import expressImg from '/public/assets/skills/express.png'
import reactImg from '/public/assets/skills/react.png'
import nodeImg from '/public/assets/skills/node.png'
import typescriptImg from '/public/assets/skills/typescript.png'
import pythonImg from '/public/assets/skills/python.png'
import githubImg from '/public/assets/skills/github1.png'
import postmanImg from '/public/assets/skills/postman.png'

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
                                src={htmlImg}
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
                                src={cssImg}
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
                                src={javascriptImg}
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
                                src={bootstrapImg}
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
                                src={phpImg}
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
                                src={mysqlImg}
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
                                src={nextjsImg}
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
                                src={tailwindImg}
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
                                src={mongoImg}
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
                                src={expressImg}
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
                                src={reactImg}
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
                                src={nodeImg}
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
                                src={typescriptImg}
                                width={64}
                                height={64}
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>TypeScript</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={pythonImg}
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
                                src={githubImg}
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
                                src={postmanImg}
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