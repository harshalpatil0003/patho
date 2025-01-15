import React from 'react'
import { Card } from 'flowbite-react'
import { Straps } from '../components/Accordion/Accordion.jsx'
import blood_analyzer from '../Assets/About/blood_analyzer.webp'
import ultrasound from '../Assets/About/ultrasound_machine.webp'

function About() {
    return (

        <div className='px-7 lg:text-xl'>
            <h1 id='About' className='m-3 text-center text-3xl font-bold lg:text-5xl mt-10'>About</h1>
            <div className="w-full lg:text-xl">
                <p className='text-justify '> Welcome to <span className='text-cyan-800 font-semibold'>GoLab</span>, your trusted companion for hassle-free pathology test bookings. Our platform is designed to simplify the process of scheduling diagnostic tests, empowering you to manage your health with convenience and confidence.
                </p>
            </div>
            <div className=''>
                <h1 className=' text-center my-5 font-bold'>What We Offer</h1>
                <div className=''>
                    <Straps />

                </div>
            </div>
            <div className=''>
                <h1 className='text-center my-5 font-bold'>Why Choose Us?</h1>
                <p className=' text-justify lg:text-xl'>
                    At <span className='text-cyan-800 font-semibold'>GoLab</span>, we prioritize your health and convenience. Whether you're looking for routine blood tests or specialized diagnostics, our platform is tailored to suit your needs.
                </p>
                <p className='my-3 font-semibold'>Advanced Equipment and Technology</p>
                <p>We partner with labs that use state-of-the-art equipment to ensure accurate and reliable results.</p>
                <div className=''>

                    <div class="relative flex overflow-x-hidden">
                        <div class=" flex py-12 animate-marquee whitespace-nowrap">
                            <span class="text-4xl mx-4"> <Card
                                className="w-1/2 mt-5"
                                imgSrc={blood_analyzer}
                                imgAlt="Blood Analyzer"

                            >
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    High-Precision Blood Analyzers
                                </h5>
                            </Card></span>
                                <Card
                                className="w-1/2"
                                imgSrc={ultrasound}
                                imgAlt="Ultrasound Machine"
                            >
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Cutting-Edge Imaging Systems
                                </h5>
                            </Card>
                            <span class="text-4xl mx-4">Marquee Item 3</span>
                            <span class="text-4xl mx-4">Marquee Item 4</span>
                            <span class="text-4xl mx-4">Marquee Item 5</span>
                        </div>

                        <div class=" flex absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                            <span class="text-4xl mx-4"> <Card
                                className="max-w-sm mt-5"
                                imgSrc={blood_analyzer}
                                imgAlt="Blood Analyzer"

                            >
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    High-Precision Blood Analyzers
                                </h5>
                            </Card></span>
                            <span class="text-4xl mx-4"> <Card
                                className="max-w-sm mt-4"
                                imgSrc={ultrasound}
                                imgAlt="Ultrasound Machine"
                            >
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Cutting-Edge Imaging Systems
                                </h5>
                            </Card></span>
                            <span class="text-4xl mx-4">Marquee Item 3</span>
                            <span class="text-4xl mx-4">Marquee Item 4</span>
                            <span class="text-4xl mx-4">Marquee Item 5</span>
                        </div>
                    </div>

                    {/*
                   
                    <Card
                        className="max-w-sm mt-4"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="/images/blog/image-1.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Sterile Sample Collection Tools
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Card
                        className="max-w-sm mt-4"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="/images/blog/image-1.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Card
                        className="max-w-sm mt-4"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="/images/blog/image-1.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card> */}


                </div>
            </div>




        </div>

    )
}

export default About
