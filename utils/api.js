import axios from 'axios';

const apiKey = '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';
const apiUrl = 'https://openrouter.ai/api/v1/chat/completions?model=meta-llama/llama-3.1-8b-instruct:free';
// const apiUrl = 'https://openrouter.ai/api/v1/chat/completions?model=google/gemma-2-9b-it:free';


const getResponse = async (prompt) => {
 try {
   const response = await axios.post(apiUrl, {
     messages: [{ role: 'user', content: prompt }],
   }, {
     headers: {
       'Authorization': `Bearer ${apiKey}`,
       'Content-Type': 'application/json'
     }
   });


   console.log('API response:', response.data);


   if (response.data && response.data.choices && response.data.choices[0].message.content) {
     return response.data.choices[0].message.content;
   } else {
     throw new Error('Unexpected API response format');
   }
 } catch (error) {
   console.error('Error making API request:', error);
   throw error;
 }
};


export default getResponse;