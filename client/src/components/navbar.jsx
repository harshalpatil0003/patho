
"use client";

import { Button, Navbar } from "flowbite-react";

export function Nav() {
  return (
    <Navbar fluid rounded className="h-20 bg-gray-400">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">4m4oig</span>
      </Navbar.Brand>
      <Navbar.Toggle />

      <div className="hidden md:order-2">
        <Button>Logout</Button>
       
      </div>
      <Navbar.Collapse   className="">
        <Navbar.Link href="#" active className="text-xl">
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="text-xl sm:text-2xl">About</Navbar.Link>
        <Navbar.Link href="#" className="text-xl">Services</Navbar.Link>
        <Navbar.Link href="#" className="text-xl">Pricing</Navbar.Link>
        <Navbar.Link href="#" className="text-xl">Contact</Navbar.Link>
        <Navbar.Link href="#" active className="text-xl">Logout</Navbar.Link>


      </Navbar.Collapse>
    </Navbar>
  );
}
