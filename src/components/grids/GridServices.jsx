import CardServico from '../cards/CardServico';
import { services } from '../../data/Services';


const GridServices = () => {

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {services.map((service, index) => (

            <CardServico key={index} service={service} index={index}/>

        ))}

    </div>

  )
}

export default GridServices