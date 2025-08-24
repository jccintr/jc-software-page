import {FooterCopyright } from "flowbite-react";


const Footer = () => {

   const ano = new Date().getFullYear();


  return (

   <section className="flexn w-full justify-center items-center bg-blue-600 p-5">

     <FooterCopyright className="text-white font-semibold" href="#" by="JC SOFTWARE" year={ano} />
      
    </section>

  )

}

export default Footer