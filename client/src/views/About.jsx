import React from 'react'
import { Card } from 'flowbite-react'
import { Straps } from '../components/Accordion/Accordion.jsx'
import blood_analyzer from '../Assets/About/Blood_analyzer.webp'
import ultrasound from '../Assets/About/ultrasound_machine.webp'
import x_ray from '../Assets/About/x-ray.avif'
import pressurized_fluid_extraction from '../Assets/About/pressurized-fluid-extraction.jpg'
import centrifuge from '../Assets/About/centrifuge.jpg'
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
                        <img src={blood_analyzer} style={{height:300, width:400}}/>

                        <img src={ultrasound} style={{height:300, width:400}}/>

                        <img src={ x_ray } style={{height:300, width:400}}/>
                        <img src={centrifuge} style={{height:300, width:400}}/>
                        <img src={pressurized_fluid_extraction} style={{height:300, width:400}}/>


                        </div>

                        <div class=" flex absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                        <img src={blood_analyzer}  style={{height:300, width:400}}/>
                        <img src={ultrasound} style={{height:300, width:400}}/>
                           
                        <img src={x_ray} style={{height:300, width:400}}/>
                        
                            <img src={centrifuge} style={{height:300, width:400}}/>
                            <img src={pressurized_fluid_extraction} style={{height:300, width:400}}/>

                        </div>
                    </div>

                </div>
            </div>




        </div>

    )
}

export default About
