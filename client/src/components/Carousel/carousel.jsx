
"use client";

import { Carousel } from "flowbite-react";
import doctor from '../Carousel/doctor.jpg'
import OIP from '../Carousel/OIP.jpeg'
import bottels from '../Carousel/bottels.jpeg'
import inject from '../Carousel/inject.jpg'
import Pathology from '../Carousel/Pathology.jpg'

export function Slider() {
  return (
    <div className="h-60 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        <img src={doctor} alt="..." />
        <img src={OIP} alt="..." />
        <img src={bottels} alt="..." />
        <img src={inject} alt="..." />
        <img src={Pathology}alt="..." />
      </Carousel>
    </div>
  );
}
