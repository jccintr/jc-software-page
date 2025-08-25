
import GridPortfolio from './grids/GridPortfolio'

const Portfolio = () => {
  return (
     <section id="portfolio" className="w-full py-8 bg-yellow-50">
      <div className=" mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
          Nosso Portfólio
        </h2>
        <h3 className="text-base md:text-xl  text-center text-gray-600 mb-12">
            Alguns projetos desenvolvidos por nós
        </h3>
        <GridPortfolio/>
      </div>
    </section>
  )
}

export default Portfolio