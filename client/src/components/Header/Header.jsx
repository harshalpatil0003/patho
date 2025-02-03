import React from "react";
import ReactDOM from "react-dom";
import { Button, Navbar, Avatar, Dropdown } from "flowbite-react";
import sec1 from '../Header/sec1.jpg'
import sec2 from '../Header/sec2.jpg'
import sec3 from '../Header/sec3.avif'
import sec4 from '../Header/sec4.jpg'
import sec5 from '../Header/sec5.jpg'
import sec6 from '../Header/sec6.jpg'
import sec7 from '../Header/sec7.avif'
import sec8 from '../Header/sec8.jpeg'
const myStyle = {
  backgroundImage:
    "url(${sec1})",

  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
export function Header() {
  return (
    <div className=" flex flex-wrap justify-around items-center py-4">

      <div className="  text-center">
        <h1 className=" m-3 text-4xl bg-gradient-to-tl from-cyan-800 via-teal-700 to-teal-400 bg-clip-text text-transparent font-bold lg:text-8xl ">Book Your Lab <br /> Tests Easily.</h1>
        <p className="block m-8 lg:text-2xl">Accurate results, trusted labs, hassle-free bookings.</p>
        <Button.Group variant="outline">
          <Button gradientMonochrome="teal" size="xl" className="font-bold rounded-lg" href="/userlogin">Book Now</Button>

        </Button.Group>
      </div>

      <div className="  grid grid-cols-2 gap-5 p-[20px]  lg:mt-12 ">
        {/* Card 1: Highlight Section */}
        <div className=" relative shadow-xl hover:scale-[1.05] transition duration-700 ease-in-out col-span-2 rounded-lg p-5 overflow-hidden " style={{ backgroundImage: `url(${sec6})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} >
          <h2 className="font-bold text-3xl"> Blood Test, COVID-19 Test</h2>
          <div className="mx-auto">
            <Button color="dark" className="mt-8 rounded-full font-bold  ">Explore Tests</Button>
          </div>
        </div>

        {/* Card 3: Flights */}
        <div className="shadow-xl  hover:scale-[1.05] transition duration-700 ease-in-out  rounded-lg p-5 overflow-hidden md:text-2xl" style={{ backgroundImage: `url(${sec7})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
          <h3 className="font-bold">Popular Tests</h3>
          <p className="block font-bold">Explore the world</p>
        </div>

        {/* Card 2: Metrics */}
        <div className="shadow-xl hover:scale-[1.05] transition duration-700 ease-in-out  rounded-lg p-5 overflow-hidden md:text-2xl" style={{ backgroundImage: `url(${sec1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
          <h3 className="font-bold">Accurate Results </h3>
          <p className="block font-bold">Trusted by 1M+ Users</p>
          {/* <h1>700+</h1> */}
        </div>

        {/* Card 4: Recommended Places */}
        <div className="shadow-xl hover:scale-[1.05] transition duration-700 ease-in-out rounded-lg p-5 overflow-hidden md:text-2xl" style={{ backgroundImage: `url(${sec5})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
          <h3 className="font-bold ">Recommended Places</h3>
          <p className="block font-bold">Discover beautiful locations</p>
        </div>

        {/* Card 5: Reviews */}
        <div className="shadow-xl  hover:scale-[1.05] transition duration-700 ease-in-out  rounded-lg p-5 overflow-hidden md:text-2xl" style={{ backgroundImage: `url(${sec8})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
          <h3 className="font-bold">Reviews</h3>

        </div>
      </div>
    </div>
  );
};

