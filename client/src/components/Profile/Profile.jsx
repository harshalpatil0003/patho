
"use client";

import { Card, Dropdown } from "flowbite-react";

export function Profile() {
  return (
    <Card className="max-w">
      <div className=" justify-end px-4 pt-4">
       
      </div>
      <div className="  items-center pb-10">
        <img src="https://avatars.githubusercontent.com/u/117168808?v=4"
          alt="Bonnie image"
          height="96"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-3xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span className="text-xl text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div className="mt-4 space-x-3 lg:mt-6">
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Call
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Message
          </a>
        </div>
      </div>
    </Card>
  );
}
