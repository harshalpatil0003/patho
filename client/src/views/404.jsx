import { Button } from "flowbite-react"
import img from '../Assets/Vaccine development.gif'
export default function Example() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className=" font-semibold text-2xl text-black">404</p>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight  text-cyan-600 sm:text-7xl">
              Page not found
            </h1>

            <img src={img} className="h-[250px] mx-auto"/>
            <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Sorry, couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button gradientMonochrome="info" href="/" className="p-2">
            <p className="text-2xl">Go Back To Home</p>
            </Button>
             
            </div>
          </div>
        </main>
      </>
    )
  }
  