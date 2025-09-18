import React from 'react'
import { useEffect } from 'react';
import { Button } from 'flowbite-react'
import AOS from "aos";
import "aos/dist/aos.css";
function Services() {
       useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return (
        <div>
            <h1 id='Services' className='m-3 text-center text-3xl font-bold lg:text-5xl'>Tests</h1>
            <div className="grid grid-cols-6 gap-10 mx-10 lg:mt-12">

                <div className="col-start-1 col-end-3" data-aos="fade-right">
                    <div className=" relative shadow-xl hover:scale-[1.01] transition duration-700 ease-in-out rounded-lg p-5 overflow-hidden bg-gradient-to-r from-teal-200 from-0% to-teal-400 to-100%"  >
                        <h2 className="font-bold text-xl">1. Complete Blood Count (CBC)</h2>
                        <div className="mx-auto">
                            <p> Description: Checks overall health and detects disorders like anemia, infection, leukemia.</p>
                            <p> <b>Sample:</b> Blood</p>
                             <p> <b>Price:</b> ₹500</p>

                            <Button color="dark" className="rounded-lg font-bold p-0 absolute right-10 bottom-5">Explore Tests</Button>
                        </div>
                    </div>
                </div>
                <div className="col-start-3 col-end-5" data-aos="zoom-in">
                    <div className=" relative shadow-xl hover:scale-[1.01] transition duration-700 ease-in-out rounded-lg p-5 overflow-hidden  bg-gradient-to-r from-teal-200 from-25% to-teal-400 to-100%"   >
                        <h2 className="font-bold text-xl"> 2. Blood Sugar (Fasting)</h2>
                        <div className="mx-auto">
                            <p>Description: Measures fasting blood glucose levels, important for diabetes diagnosis.</p>
                            <p> <b>Sample:</b> Blood</p>
                              <p> <b>Price:</b> ₹300</p>
                            <Button color="dark" className="rounded-lg font-bold p-0 absolute right-10 bottom-5">Explore Tests</Button>
                        </div>
                    </div>
                </div>
                <div className="col-start-5 col-end-7" data-aos="fade-left">
                    <div className=" relative shadow-xl hover:scale-[1.01] transition duration-700 ease-in-out rounded-lg p-5 overflow-hidden bg-gradient-to-r from-teal-200 from-25% to-teal-400 to-100% "   >
                        <h2 className="font-bold text-xl"> 3. Lipid Profile</h2>
                        <div className="mx-auto">
                            <p>Description: Measures cholesterol and triglyceride levels to assess heart health.</p>
                            <p> <b>Sample:</b> Blood</p>
                              <p> <b>Price:</b> ₹800</p>
                            <Button color="dark" className="rounded-lg font-bold p-0 absolute right-10 bottom-5">Explore Tests</Button>
                        </div>
                    </div>
                </div>
                <div className="col-start-1 col-end-3" data-aos="fade-right">
                    <div className=" relative shadow-xl hover:scale-[1.01] transition duration-700 ease-in-out rounded-lg p-5 overflow-hidden  bg-gradient-to-r from-teal-200 from-25% to-teal-400 to-100%"   >
                        <h2 className="font-bold text-xl">4. Liver Function Test (LFT)</h2>
                        <div className="mx-auto">
                            <p>Description: Evaluates liver health by measuring enzymes, proteins, and bilirubin.</p>
                            <p> <b>Sample:</b> Blood</p>
                              <p> <b>Price:</b> ₹900</p>
                            <Button color="dark" className="rounded-lg font-bold p-0 absolute right-10 bottom-5">Explore Tests</Button>
                        </div>
                    </div>
                </div>
                <div className="col-start-3 col-end-5" data-aos="zoom-in">
                    <div className=" relative shadow-xl hover:scale-[1.01] transition duration-700 ease-in-out rounded-lg p-5 overflow-hidden  bg-gradient-to-r from-teal-200 from-25% to-teal-400 to-100%"   >
                        <h2 className="font-bold text-xl">5. Kidney Function Test (KFT)</h2>
                        <div className="mx-auto">
                            <p>Description: Measures urea, creatinine, and electrolytes to check kidney health.</p>
                            <p> <b>Sample:</b> Blood</p>
                              <p> <b>Price:</b> ₹850</p>
                            <Button color="dark" className="rounded-lg font-bold p-0 absolute right-10 bottom-5">Explore Tests</Button>
                        </div>
                    </div>
                </div>
                <div className="col-start-5 col-end-7" data-aos="fade-left">
                    <div className=" relative shadow-xl hover:scale-[1.01] transition duration-700 ease-in-out rounded-lg p-5 overflow-hidden  bg-gradient-to-r from-teal-200 from-25% to-teal-400 to-100%"   >
                        <h2 className="font-bold text-xl">6. Thyroid Profile (T3, T4, TSH)</h2>
                        <div className="mx-auto">
                            <p>Description: Assesses thyroid gland function, useful in detecting hyper/hypothyroidism.</p>
                            <p> <b>Sample:</b> Blood</p>
                              <p> <b>Price:</b> ₹700</p>
                            <Button color="dark" className="rounded-lg font-bold p-0 absolute right-10 bottom-5">Explore Tests</Button>
                        </div>
                    </div>
                </div>
                <div className="col-start-1 col-end-3" data-aos="fade-right">
                    <div className=" relative shadow-xl hover:scale-[1.01] transition duration-700 ease-in-out rounded-lg p-5 overflow-hidden  bg-gradient-to-r from-teal-200 from-25% to-teal-400 to-100%"   >
                        <h2 className="font-bold text-xl">7. TUrine Routine & Microscopy</h2>
                        <div className="mx-auto">
                            <p>Description: Detects infections, kidney disease, and metabolic conditions.</p>
                            <p> <b>Sample:</b> Urine</p>
                              <p> <b>Price:</b> ₹250</p>
                            <Button color="dark" className="rounded-lg font-bold p-0 absolute right-10 bottom-5">Explore Tests</Button>
                        </div>
                    </div>
                </div>
                <div className="col-start-3 col-end-5" data-aos="zoom-in">
                    <div className=" relative shadow-xl hover:scale-[1.01] transition duration-700 ease-in-out rounded-lg p-5 overflow-hidden  bg-gradient-to-r from-teal-200 from-25% to-teal-400 to-100%"   >
                        <h2 className="font-bold text-xl">8. Vitamin D Test</h2>
                        <div className="mx-auto">
                            <p>Description: Measures Vitamin D levels, important for bone and immune health.</p>
                            <p> <b>Sample:</b> Blood</p>
                              <p> <b>Price:</b> ₹1200</p>
                            <Button color="dark" className="rounded-lg font-bold p-0 absolute right-10 bottom-5">Explore Tests</Button>
                        </div>
                    </div>
                </div>
                <div className="col-start-5 col-end-7" data-aos="fade-left">
                    <div className=" relative shadow-xl hover:scale-[1.01] transition duration-700 ease-in-out rounded-lg p-5 overflow-hidden  bg-gradient-to-r from-teal-200 from-25% to-teal-400 to-100%"   >
                        <h2 className="font-bold text-xl">9. Hemoglobin (Hb) Test</h2>
                        <div className="mx-auto">
                            <p>Description: Assesses thyroid gland function, useful in detecting hyper/hypothyroidism.</p>
                            <p><b>Sample:</b> Blood</p>
                              <p><b>Price:</b> ₹200</p>
                            <Button color="dark" className="rounded-lg font-bold p-0 absolute right-10 bottom-5 ">Explore Tests</Button>
                        </div>
                    </div>
                </div>
                <div className="col-start-3 col-end-5 " data-aos="fade-up">
                    <div className=" relative shadow-xl hover:scale-[1.01] transition duration-700 ease-in-out rounded-lg p-5 overflow-hidden  bg-gradient-to-r from-teal-200 from-25% to-teal-400 to-100% ">
                        <h2 className="font-bold text-xl">10. Full Body Checkup (Basic Package)</h2>
                        <div className="mx-auto  ">
                            <p>Description: Includes CBC, LFT, KFT, Lipid Profile, Thyroid Profile.</p>
                            <p><b>Sample:</b> Blood + Urine</p>
                              <p><b>Price:</b> ₹2500</p>
                            <Button color="dark" className="rounded-lg font-bold p-0 absolute right-10 bottom-5 absolute right-10 bottom-5 ">Explore Tests</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
