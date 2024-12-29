
"use client";

import { Button, Navbar } from "flowbite-react";
import logo from '../../Assets/navbar/logo.png'
import logout from '../Navbar/logout.png'

export function Nav() {
  return (
    <Navbar fluid rounded className="bg-cyan-50">
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse className="mt-[10px]">
        <Navbar.Link href="#" active className="lg:text-xl"> Home </Navbar.Link>
        <Navbar.Link href="#" className="lg:text-xl">About</Navbar.Link>
        <Navbar.Link href="#" className="lg:text-xl">Services</Navbar.Link>
        <Navbar.Link href="#" className="lg:text-xl">Pricing</Navbar.Link>
        <Navbar.Link href="#" className="lg:text-xl">Contact</Navbar.Link>
        <div className="flex md:order-2">
          <Button className=" mb-[5px] flex items-center gap-1">
            <p className=" me-[5px] text-red-600 lg:text-xl">Logout</p>
            <img src={logout} alt="logout btn" className="h-6" />
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
