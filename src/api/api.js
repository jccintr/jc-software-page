const BASE_API = 'https://api-send-email-jcsoftware-page-production.up.railway.app'

export default {

      sendMessage: async (fd) => {
        const response = await fetch(`${BASE_API}/send`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fd)
        });
       
        return response;
    },

  
    
  
   
};