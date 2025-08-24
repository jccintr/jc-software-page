import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

const Rodape = () => {
    const ano = new Date().getFullYear();
  return (
   <Footer container>
      <FooterCopyright href="#" by="JC SOFTWARE" year={ano} />
      <FooterLinkGroup>
       
      </FooterLinkGroup>
    </Footer>
  )
}

export default Rodape