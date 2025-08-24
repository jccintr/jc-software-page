import { projects } from "../../data/Projects"
import CardPortfolio from "../cards/CardPortfolio"


const GridPortfolio = () => {
  return (
     <div className="w-auto  grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {projects.map((project, index) => (

            <CardPortfolio index={index} project={project}/>

        ))}

    </div>
  )
}

export default GridPortfolio