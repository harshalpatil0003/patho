import React from 'react'
import { Button } from 'flowbite-react'
function Services() {
    return (
        <div>
            <h1 id='Services' className='m-3 text-center text-3xl font-bold lg:text-5xl'>Services</h1>
            <div className="grid grid-cols-6 gap-10 mx-12 p-[20px]  lg:mt-12">

                <div className="col-start-1 col-end-3">
                    <div className=" relative shadow-xl hover:scale-[1.05] transition duration-700 ease-in-out rounded-lg p-5 overflow-hidden  bg-teal-200 " style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} >
                        <h2 className="font-bold text-3xl">1. Online Lab Test Booking</h2>
                        <div className="mx-auto">
                            <p> Book tests from home with flexible time slots.</p>
                            <Button color="dark" className="mt-8 rounded-full font-bold  ">Explore Tests</Button>
                        </div>
                    </div>
                </div>
                <div className="col-end-7 col-span-2 ...">
                    <div className=" relative shadow-xl hover:scale-[1.05] transition duration-700 ease-in-out rounded-lg p-5 overflow-hidden  bg-teal-200" style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} >
                        <h2 className="font-bold text-3xl"> 2. Home Sample Collection</h2>
                        <div className="mx-auto">
                            <p>Get samples collected from your home by certified professionals.</p>
                            <Button color="dark" className="mt-8 rounded-full font-bold  ">Explore Tests</Button>
                        </div>
                    </div>
                </div>
                <div className="col-start-2 col-span-2 ...">
                    <div className=" relative shadow-xl hover:scale-[1.05] transition duration-700 ease-in-out rounded-lg p-5 overflow-hidden bg-teal-200 " style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} >
                        <h2 className="font-bold text-3xl"> 3. Health Checkup Packages</h2>
                        <div className="mx-auto">
                            <p>Affordable test bundles for full-body, diabetes, thyroid, etc.</p>
                            <Button color="dark" className="mt-8 rounded-full font-bold  ">Explore Tests</Button>
                        </div>
                    </div>
                </div>
                <div className=" col-span-2 ...">
                    <div className=" relative shadow-xl hover:scale-[1.05] transition duration-700 ease-in-out rounded-lg p-5 overflow-hidden  bg-teal-200" style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} >
                        <h2 className="font-bold text-3xl">4. Fast & Accurate Reports</h2>
                        <div className="mx-auto">
                            <p> Digital test reports delivered securely to your email.</p>
                            <Button color="dark" className="mt-8 rounded-full font-bold  ">Explore Tests</Button>
                        </div>
                    </div>
                </div>
                <div className="col-start-1 col-span-2 ...">
                    <div className=" relative shadow-xl hover:scale-[1.05] transition duration-700 ease-in-out rounded-lg p-5 overflow-hidden  bg-teal-200" style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} >
                        <h2 className="font-bold text-3xl">5. Doctor Consultation</h2>
                        <div className="mx-auto">
                            <p> Get expert advice based on your test results.</p>
                            <Button color="dark" className="mt-8 rounded-full font-bold  ">Explore Tests</Button>
                        </div>
                    </div>
                </div>
                <div className="col-end-7 col-span-2 ...">
                    <div className=" relative shadow-xl hover:scale-[1.05] transition duration-700 ease-in-out rounded-lg p-5 overflow-hidden  bg-teal-200" style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} >
                        <h2 className="font-bold text-3xl">6. Corporate & Group Testing</h2>
                        <div className="mx-auto">
                            <p>Special health screening for companies & organizations.</p>
                            <Button color="dark" className="mt-8 rounded-full font-bold  ">Explore Tests</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
