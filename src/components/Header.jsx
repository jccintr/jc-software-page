import { Navbar } from "flowbite-react";
import { navbarCustomTheme } from '../theme/NavbarTheme';
import logo from '../assets/logo-600x120.png';


const Header = () => {
  return (
    <Navbar 
      className='w-full py-4 border-b-2 md:px-10 lg:px-20'
      theme={navbarCustomTheme}>
      <Navbar.Brand href="https://jc-software.com">
         <img src={logo} alt='logo' className='w-52 sm:w-60 md:w-80' />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>

        <Navbar.Link className='font-semibold uppercase text-blue-800' href="#servicos">Serviços</Navbar.Link>
        <Navbar.Link className='font-semibold  uppercase text-blue-800' href="#tecnologias">Tecnologias</Navbar.Link>
        <Navbar.Link className='font-semibold  uppercase text-blue-800' href="#portfolio">Portfólio</Navbar.Link>
        <Navbar.Link className='font-semibold  uppercase text-blue-800' href="#contato">Fale Conosco</Navbar.Link>
       
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header