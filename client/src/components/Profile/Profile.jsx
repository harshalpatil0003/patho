
"use client";

import { Banner, Button } from "flowbite-react";
import logo from '../../Assets/navbar/logo.png'

export function Profile() {

  return (
    <Banner className="sticky top-0 z-50"> 
      <div className="flex max-w-full flex-col justify-between rounded-lg border border-gray-100 bg-cyan-800 p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row ">
        <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
          <a
            href="/UserPanel"
            className="mb-2 flex items-center border-gray-200 dark:border-gray-600 md:mb-0 md:mr-4 md:border-r md:pr-4">
            <img src={logo} className="mr-2 h-10  md:h-[65px]" alt="Flowbite Logo" />
          </a>
          <span className="self-left whitespace-nowrap text-3xl font-semibold dark:text-white md:pr-6">
           
            </span>
        </div>
        <div className="flex text-lg shrink-0 items-center gap-2">
        <Button gradientMonochrome="info" className="font-bold" href="tel:8767887013">Call</Button>
          <Button color="gray" href="" className="font-bold">Message</Button>

        </div>
      </div>
    </Banner>
  );
}
