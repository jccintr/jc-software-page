import { Card } from 'flowbite-react';

const CardServico = ({service}) => {

  return (

    <Card className="shadow-lg hover:shadow-xl  transform transition duration-300 hover:scale-105">

      <div className="flex flex-col items-center text-center p-6">

          <div className="mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        
      </div>

    </Card>

  )

}

export default CardServico