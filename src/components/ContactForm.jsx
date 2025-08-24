import { useState } from 'react'
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { ToastContainer, toast } from 'react-toastify';
import api from '../api/api.js'

const ContactForm = () => {
    const [isLoading,setIsLoading] = useState(false);
    const [formData,setFormData] = useState({name:'',email:'',phone:'',message:''});
    const [errorMessage,setErrorMessage] = useState(null);
    const [showToast,setShowToast] = useState(false);
    const [showErrorToast,setShowErrorToast] = useState(false);

    const handleChange = (e) => setFormData({...formData,[e.target.id]: e.target.value});

    const handleSubmit = async (e) => {
  
      e.preventDefault();

            
      if(!formData.name) {
        setErrorMessage('O Nome é de preenchimento obrigatório.');
        return;
      }

      if(!formData.phone) {
        setErrorMessage('O email é de preenchimento obrigatório.');
        return;
      }

      if(!formData.phone) {
        setErrorMessage('O Telefone é de preenchimento obrigatório.');
        return;
      }

      if(!formData.message) {
        setErrorMessage('A mensagem é de preenchimento obrigatório.');
        return;
      }
    

      const response = await api.sendMessage(formData);
      if (response.status === 200) {
          toast.success('A sua mensagem foi enviada.', {
              position: "bottom-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
              theme: "colored"
          });
      } else {
         toast.error('Falha ao enviar mensagem.', {
              position: "bottom-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
              theme: "colored"
          });
      }
      console.log(response.status);

    }


  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Fale Conosco
        </h2>
        <p className="text-lg text-center text-white mb-12">
          Solicite seu orçamento sem compromisso e transforme sua ideia em realidade!
        </p>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name" value="Nome" className="text-white" />
              <TextInput
                id="name"
                type="text"
                placeholder="Digite seu nome"
                required
                className="mt-1"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="email" value="Email" className="text-white" />
              <TextInput
                id="email"
                type="email"
                placeholder="Digite seu email"
                required
                className="mt-1"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="phone" value="Telefone" className="text-white" />
              <TextInput
                id="phone"
                type="tel"
                placeholder="Digite seu telefone"
                className="mt-1"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="message" value="Mensagem" className="text-white" />
              <Textarea
                id="message"
                placeholder="Descreva a sua ideia ou projeto"
                required
                rows={5}
                className="mt-1"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <Button 
              type="submit"
              outline={false}
              className="w-full"
               color='red'
            >
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="colored"
           />
    </section>
  );
};

export default ContactForm;