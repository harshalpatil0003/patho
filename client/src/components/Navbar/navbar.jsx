
"use client";

import { Button, Navbar } from "flowbite-react";
import Logo from '../../Assets/navbar/logo.png'

export function Nav() {
  return (
    <Navbar fluid rounded className="h-[80px] bg-cyannns-400">
      <Navbar.Brand href="/">
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="GoLab Logo" />
        {/* <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"></span> */}
      </Navbar.Brand>
      <Navbar.Toggle />

      <div className="hidden md:order-2">
        <Button>Logout</Button>

      </div>
      <Navbar.Collapse className="">
        <Navbar.Link href="/" active className="text-xl">
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="text-xl sm:text-2xl">About</Navbar.Link>
        <Navbar.Link href="#" className="text-xl">Services</Navbar.Link>
        <Navbar.Link href="#" className="text-xl">Pricing</Navbar.Link>
        <Navbar.Link href="#" className="text-xl">Contact</Navbar.Link>
        <Navbar.Link href="#" className="text-xl px-2 active:text-white">Logout</Navbar.Link>
        <Navbar.Link href="/Userlogin" className="text-xl">Login</Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  );
}
