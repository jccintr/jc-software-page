import React from 'react'
import GridTecnologias from './grids/GridTecnologias';

const Tecnologias = () => {
  return (
    <section id="tecnologias" className="w-full bg-white py-8">
      <div className="flex flex-col justify-center items-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
          Tecnologias Utilizadas
        </h2>
        <h3 className="text-base md:text-xl  text-center text-gray-600 mb-12">
            Algumas tecnologias que utilizamos em nossos projetos
        </h3>
        <GridTecnologias/>
      </div>
    </section>
  );
}

export default Tecnologias