import Header from './components/Header'
import Hero from './components/Hero'
import Servicos from './components/Servicos'
import Form from './components/Form'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Tecnologias from './components/Tecnologias'



function App() {



  return (
   <div className='w-auto flex flex-1 flex-col justify-center items-center'>
      <Header/>
      <Hero/>
      <Servicos/>
      <Tecnologias/>
      <Portfolio/>
     
      <Form/>
      
      <Footer/>

     
   </div>
  )
}

export default App
