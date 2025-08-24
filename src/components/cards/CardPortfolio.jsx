import { Card } from "flowbite-react";

const CardPortfolio = ({project}) => {
  return (
   <Card
      className="max-w-64 hover:shadow-xl"
      imgAlt={project.name}
      imgSrc={project.image}
    >
      <h5 className="text-2xl font-semibold tracking-tight text-gray-800 dark:text-white">
        {project.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {project.description}
      </p>
    </Card>
  )
}

export default CardPortfolio