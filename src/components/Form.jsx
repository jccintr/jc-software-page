import React,{useState} from 'react'
import { Button, Textarea, Label, TextInput,Spinner,Alert,Toast  } from "flowbite-react";
import { ToastContainer, toast } from 'react-toastify';
import api from '../api/api.js'

const Form = () => {
    const [isLoading,setIsLoading] = useState(false);
    const [formData,setFormData] = useState({name:'',email:'',phone:'',message:''});

    const handleChange = (e) => setFormData({...formData,[e.target.id]: e.target.value});
  
    const handleSubmit = async (e) => {
     
         e.preventDefault();
   
               
         if(!formData.name) {
           setErrorMessage('O Nome é de preenchimento obrigatório.');
           return;
         }
   /*
         if(!formData.phone) {
           setErrorMessage('O email é de preenchimento obrigatório.');
           return;
         }
   */
         if(!formData.phone) {
           setErrorMessage('O Telefone é de preenchimento obrigatório.');
           return;
         }
   
         if(!formData.message) {
           setErrorMessage('A mensagem é de preenchimento obrigatório.');
           return;
         }
       
         setIsLoading(true)
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
             setFormData({name:'',email:'',phone:'',message:''});
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
        setIsLoading(false)
       }
   

  return (
    <section id="contato" className='bg-gray-200 py-8 flex flex-col w-full items-center justify-center px-5 gap-2   md:items-center'>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Fale Conosco
        </h2>
        <h3 className="text-base md:text-xl  text-center text-gray-600 mb-12">
          Solicite seu orçamento sem compromisso e transforme sua ideia em realidade
        </h3>
        
        <form className='w-full mt-4 md:w-2/3 ' onSubmit={handleSubmit}>
            <div className="mb-1">
                <div className="mb-1 block">
                   <Label htmlFor="name" value="Nome" />
                </div>
                <TextInput id="name" value={formData.name} placeholder="Digite o seu nome" required onChange={handleChange}/>
            </div>
            <div className="mb-1">
                <div className="mb-1 block">
                   <Label htmlFor="phone" value="Telefone" />
                </div>
                <TextInput id="phone"  value={formData.phone} placeholder="Digite o seu telefone" required onChange={handleChange}/>
            </div>
            <div className="mb-1">
                <div className="mb-1 block">
                   <Label htmlFor="email" value="Email" />
                </div>
                <TextInput id="email" value={formData.email} type="email" placeholder="Digite o seu email" onChange={handleChange}/>
            </div>
            <div className="mb-1">
                <div className="mb-1 block">
                    <Label htmlFor="message" value="Mensagem" />
                </div>
                <Textarea id="message" value={formData.message} placeholder="Descreva a sua ideia ou projeto" required rows={4} onChange={handleChange} />
            </div>
            <Button className='w-full mt-4'   type='submit' disabled={isLoading}>
              {isLoading ? <Spinner size='sm'/>: 'ENVIAR'}
            </Button>
            
        </form>
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
  )
}

export default Form