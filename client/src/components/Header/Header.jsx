import React from "react";
import ReactDOM from "react-dom";
import { Button, Navbar, Avatar, Dropdown } from "flowbite-react";
import sec1 from '../Header/sec1.jpg'
import sec2 from '../Header/sec2.jpg'
import sec3 from '../Header/sec3.avif'
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
        <h1 className=" m-3 text-4xl  font-bold lg:text-8xl ">Book Your Lab <br/> Tests Easily.</h1>
        <p className="block m-8 lg:text-2xl">Accurate results, trusted labs, hassle-free bookings.</p>
      </div>

      <div className="  grid grid-cols-2 gap-5 p-[20px]  lg:mt-12 ">
        {/* Card 1: Highlight Section */}
        <div className="shadow-xl  col-span-2 text-center border-2 border-gray-400 rounded-lg p-5 overflow-hidden " style={{ backgroundImage:`url(${sec1})`,backgroundRepeat:"no-repeat",  backgroundSize: "cover",backgroundPosition: "center"}} >
          <h2 className="font-bold text-3xl
          "> Blood Test, COVID-19 Test</h2>
          <Button className=" block mt-[50px] rounded-full ">Explore Tests</Button>
        </div>

        {/* Card 2: Metrics */}
        <div className="shadow-xl  border-2 border-gray-400 rounded-lg p-5 overflow-hidden md:text-2xl" style={{ backgroundImage:`url(${sec2})`,backgroundRepeat:"no-repeat",  backgroundSize: "cover",backgroundPosition: "center"}}>
          <h3 className="font-bold">Accurate Results </h3>
          <p className="block font-bold">Trusted by 1M+ Users</p>
          {/* <h1>700+</h1> */}
        </div>

        {/* Card 3: Flights */}
        <div className="shadow-xl  text-2xl border-2 border-gray-400 rounded-lg p-5 overflow-hidden"style={{ backgroundImage:`url(${sec3})`,backgroundRepeat:"no-repeat",  backgroundSize: "cover",backgroundPosition: "center"}}>
          <h3 className="font-bold">Popular Tests</h3>
          <p className="block font-bold">Explore the world</p>
        </div>

        {/* Card 4: Recommended Places */}
        <div className="shadow-xl ext-2xl border-2 border-gray-400 rounded-lg p-5 overflow-hidden">
          <h3 className="font-bold">Recommended Places</h3>
          <p className="block font-bold">Discover beautiful locations</p>
        </div>

        {/* Card 5: Reviews */}
        <div className="shadow-xl text-2xl border-2 border-gray-400 rounded-lg p-5 overflow-hidden">
          <h3 className="font-bold">Reviews</h3>

        </div>
      </div>
    </div>
  );
};

