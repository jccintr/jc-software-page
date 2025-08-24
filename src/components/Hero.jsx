import { Button } from "flowbite-react";

const Hero = () => {
  return (
    <section className='w-full relative'>

      <p className="absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg z-10 bg-black bg-opacity-30 p-4 rounded-lg md:text-2xl lg:text-3xl">
        Transforme as suas idéias em <span className='font-semibold'>soluções digitais</span> 
      </p>
      
     <img className="w-full hidden md:block md:h-auto" src="hero-image.jpg" alt="" />
     <img className="w-full md:hidden" src="hero-image-mobile.jpg" alt="" />
       
    </section>
  )
}

export default Hero