import React from 'react'
import {Straps} from '../components/Accordion/Accordion.jsx'
function About() {
    return (

        <div className='px-7 lg:text-xl'>
            <h1 id='About' className='m-3 text-center text-3xl font-bold lg:text-5xl mt-10'>About</h1>
            <div className="w-full lg:text-2xl">
                <p className='text-justify '> Welcome to <span className='text-cyan-800 font-semibold'>GoLab</span>, your trusted companion for hassle-free pathology test bookings. Our platform is designed to simplify the process of scheduling diagnostic tests, empowering you to manage your health with convenience and confidence.
                </p>
            </div>

            <div className=''>
                <div className=''>
                    <h1 className=' my-5 font-semibold'>Our Mission</h1>
                    <p className=' text-justify lg:text-2xl'>
                        Our mission is to bridge the gap between patients and pathology labs, offering a seamless, user-friendly platform where you can book tests effortlessly. We aim to provide reliable, efficient, and timely services, making healthcare more accessible for everyone.
                    </p>
                </div>
                <div className=''>
                    <h1 className='  my-5 font-semibold'>What We Offer</h1>
                    <div className=''>
                  <Straps/>

                    </div>
                </div>
            </div>



        </div>

    )
}

export default About
