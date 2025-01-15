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
                    {/* <Card
                        className="max-w-sm max-h-10 mt-5"
                        imgSrc={blood_analyzer}
                        imgAlt="Blood Analyzer"
                        
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            High-Precision Blood Analyzers
                        </h5>
                    </Card>
                    <Card
                        className="max-w-sm mt-4"
                        imgSrc={ultrasound}
                        imgAlt="Ultrasound Machine"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Cutting-Edge Imaging Systems
                        </h5>
                    </Card>
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
                    <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                                className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                                className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                                className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                                className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                                className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                                className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                                className="rounded-box" />
                        </div>
                    </div>

                </div>
            </div>




        </div>

    )
}

export default About
