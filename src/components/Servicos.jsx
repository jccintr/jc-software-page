import GridServices from './grids/GridServices';

const Servicos = () => {
  return (
    <section id="servicos" className="py-8 bg-gray-50">
      <div className=" mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
          Nossos Serviços
        </h2>
        <GridServices/>
      </div>
    </section>
  );
};

export default Servicos;