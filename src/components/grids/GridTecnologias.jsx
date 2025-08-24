import React from 'react'
import { stacks } from '../../data/Stacks'

const GridTecnologias = () => {

  return (
     <div className="w-full grid  justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {stacks.map((stack, index) => (

            <img index={index} src={'tecnologias/'+stack.image} alt={stack.name} className='w-32' />

        ))}

    </div>
  )

}

export default GridTecnologias