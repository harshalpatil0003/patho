
"use client";

import { Button, Navbar, Avatar, Dropdown } from "flowbite-react";
import logo from '../../Assets/navbar/logo.png'
import logout from '../Navbar/logout.png'

export function Nav() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

  };
  return (
    <Navbar fluid rounded className="bg-cyan-800 sticky top-0 z-50">
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-11 md:h-[65px]" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Button gradientMonochrome="success">Login</Button>
          }
        >
          
          <Dropdown.Header>
            {/* <span className="block text-sm">Bonnie Green</span> */}
            {/* <span className="block truncate text-sm font-medium">Name</span> */}
            <Dropdown.Item> <Navbar.Link href="/userregister" className="lg:text-xl">Sign Up</Navbar.Link></Dropdown.Item>

          </Dropdown.Header>
          <Dropdown.Item> <Navbar.Link href="/userlogin" className="lg:text-xl">User</Navbar.Link></Dropdown.Item>
          <Dropdown.Item> <Navbar.Link href="/userlogin" className="lg:text-xl">Admin</Navbar.Link></Dropdown.Item>
        </Dropdown>
      </div>
      <Navbar.Toggle />

      <Navbar.Collapse className="">
        <Navbar.Link href="#" className="lg:text-xl text-white"> Home </Navbar.Link>


        <Navbar.Link className="cursor-pointer lg:text-xl text-white" onClick={() => scrollToSection('About')}>About</Navbar.Link>



        <Navbar.Link href="#" className="lg:text-xl  text-white">Services</Navbar.Link>
        <Navbar.Link href="#" className="lg:text-xl text-white">Pricing</Navbar.Link>
        <Navbar.Link href="#" className="cursor-pointer lg:text-xl text-white" onClick={() => scrollToSection('Contact')}>Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
