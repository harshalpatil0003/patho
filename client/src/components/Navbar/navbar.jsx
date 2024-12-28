
import { Button, Navbar } from "flowbite-react";
import Logo from '../../Assets/navbar/logo.png'
import logout from '../Navbar/logout.png'

export function Nav() {
  return (
    <Navbar   className="  pt-10 h-[80px] bg-black">
      <Navbar.Brand href="/" className="mt-[10px]">
        <img src={Logo} className="mr-3 h-8 md: h-11 " alt="GoLab Logo" />
        {/* <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"></span> */}
      </Navbar.Brand>
      <Navbar.Toggle />

     
      <Navbar.Collapse className="mt-[10px]">
        <Navbar.Link href="/"  className="text-xl text-white">Home</Navbar.Link>
        <Navbar.Link href="#" className="text-xl text-white ">About</Navbar.Link>
        <Navbar.Link href="#" className="text-xl text-white">Services</Navbar.Link>
        <Navbar.Link href="#" className="text-xl text-white">Pricing</Navbar.Link>
        <Navbar.Link href="#" className="text-xl text-white">Contact</Navbar.Link>
        <Navbar.Link href="/Userlogin" className="text-xl text-white ">Login</Navbar.Link>
      
        
        <Navbar.Link href="#" className="text-xl  text-red-700">Logout</Navbar.Link>
        <img src={logout} alt="logout img" className="border-1 hover:bg-s mt-[10px] h-8 md:inline-flex  mb-[10px]"/> 

      </Navbar.Collapse>
    </Navbar>
  );
}
