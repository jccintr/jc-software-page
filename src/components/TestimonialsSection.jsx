import { Card, Avatar } from 'flowbite-react';

const testimonials = [
  {
    name: 'Ana Silva',
    company: 'TechTrend Innovations',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    testimonial: 'A equipe entregou um aplicativo móvel incrível, superando nossas expectativas com um design intuitivo e performance excepcional!',
  },
  {
    name: 'Carlos Mendes',
    company: 'GrowEasy Solutions',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    testimonial: 'Nossa landing page ficou perfeita! O time foi extremamente profissional e atencioso, garantindo um resultado de alta qualidade.',
  },
  {
    name: 'Mariana Costa',
    company: 'BrightFuture Tech',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    testimonial: 'O aplicativo web desenvolvido foi exatamente o que precisávamos. Rápido, seguro e com uma interface que nossos clientes adoram!',
  },
  {
    name: 'Rafael Souza',
    company: 'NextGen Enterprises',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    testimonial: 'A solução desktop fornecida é robusta e eficiente. A equipe foi ágil e ofereceu suporte excepcional durante todo o projeto.',
  },
  {
    name: 'Juliana Lima',
    company: 'Visionary Labs',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    testimonial: 'Trabalhar com eles foi uma experiência fantástica. A landing page aumentou significativamente nossas conversões!',
  },
  {
    name: 'Felipe Almeida',
    company: 'Innovate Systems',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    testimonial: 'O aplicativo móvel que desenvolveram é incrivelmente funcional e visualmentee impressionante. Recomendo fortemente!',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          O Que Nossos Clientes Dizem
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center p-6">
                <Avatar
                  img={testimonial.image}
                  rounded={true}
                  size="lg"
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 mb-3">{testimonial.company}</p>
                <p className="text-gray-600 italic">
                  "{testimonial.testimonial}"
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;