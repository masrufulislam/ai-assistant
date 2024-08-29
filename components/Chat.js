'use client';

import React, { useState, useRef, useEffect } from 'react';
import getResponse from '../utils/api';

const Chat = () => {
 const [messages, setMessages] = useState([
   { role: 'assistant', content: "Hello! I'm Akhi, your AI assistant. What do you need help with today?" }
 ]);
 const [prompt, setPrompt] = useState('');
 const [isTyping, setIsTyping] = useState(false);

 const chatBoxRef = useRef(null);

 const handleSubmit = async (e) => {
   e.preventDefault();
   if (prompt.trim() === '') return;
    const newMessages = [...messages, { role: 'user', content: prompt }];
   setMessages(newMessages);
   setPrompt('');
    try {
     setIsTyping(true);
     let response;
     if (prompt.trim().toLowerCase() === 'who are you?') {
       response = 'I am Akhi, your AI assistant.';
     } else {
       response = await getResponse(prompt);
     }
     setIsTyping(false);
     displayResponse(response, newMessages);
   } catch (error) {
     console.error('Error:', error);
     setMessages([...newMessages, { role: 'assistant', content: 'Oops! Something went wrong.' }]);
     setIsTyping(false);
   }
 };


 const formatResponse = (response) => {
   const formattedResponse = response
     .replace(/(\d+)(?=\s|$)/g, '<div style="text-indent: 20px;">$1</div>')
     .split('\n\n')
     .map(paragraph => `<p style="margin: 0; text-indent: 20px; text-align: justify;">${paragraph.trim()}</p>`)
     .join('<br/><br/>');
    return formattedResponse;
 };


 const displayResponse = (response, newMessages) => {
   let currentIndex = 0;
   const formattedResponse = formatResponse(response);
   const responseContent = formattedResponse.split('');
   const displayInterval = setInterval(() => {
     if (currentIndex < responseContent.length) {
       const updatedMessages = [
         ...newMessages,
         { role: 'assistant', content: responseContent.slice(0, currentIndex + 1).join('') }
       ];
       setMessages(updatedMessages);
       currentIndex++;
     } else {
       clearInterval(displayInterval);
     }
   }, 0);
 };

 useEffect(() => {
   if (chatBoxRef.current) {
     chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
   }
 }, [messages]);

 return (
   <div style={styles.container}>
     <img src="/Akhilogo.png" alt="AI Assistant" style={styles.image} />
     <div ref={chatBoxRef} style={styles.chatBox}>
       {messages.map((message, index) => (
         <div key={index} style={styles.messageContainer}>
           {message.role === 'assistant' && <img src="nlogo.png" alt="Assistant" style={styles.icon} />}
           <div style={message.role === 'user' ? styles.userMessage : styles.assistantMessage}>
             {message.role === 'assistant'
               ? <div dangerouslySetInnerHTML={{ __html: message.content }} />
               : message.content
             }
           </div>
           {message.role === 'user' && <img src="/userlogo.jpg" alt="User" style={styles.icon} />}
         </div>
       ))}
     </div>
     <form onSubmit={handleSubmit} style={styles.form}>
       <input
         type="text"
         value={prompt}
         onChange={(e) => setPrompt(e.target.value)}
         style={styles.input}
         placeholder="Type your message here..."
         disabled={isTyping}
       />
       <button type="submit" style={styles.button} disabled={isTyping}>➣</button>
     </form>
     <div style={styles.disclaimer}>
       Akhi can make mistakes, so double-check its responses.
     </div>
   </div>
 );
};

const styles = {
 container: {
   background: 'linear-gradient(to bottom, #000000 0%, #033366 100%)',
   color: '#fff',
   height: '100vh',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   padding: '20px',
   boxSizing: 'border-box',
 },
 image: {
   width: '200px',
   height: 'auto',
   marginBottom: '35px',
   marginTop: '20px',
 },
 chatBox: {
   flexGrow: 1,
   overflowY: 'auto',
   marginBottom: '20px',
   maxWidth: '800px',
   width: '100%',
   margin: '0 auto',
   display: 'flex',
   flexDirection: 'column',
 },
 messageContainer: {
   display: 'flex',
   alignItems: 'center',
   marginBottom: '10px',
   width: '100%',
 },
 icon: {
   width: '40px',
   height: '40px',
   borderRadius: '50%',
   margin: '0 10px',
 },
 userMessage: {
   background: 'linear-gradient(to bottom, #003366 0%, #000000 100%)',
   color: '#fff',
   padding: '10px 15px',
   borderRadius: '15px',
   margin: '5px 0',
   maxWidth: '70%',
   wordWrap: 'break-word',
   overflowWrap: 'break-word',
   hyphens: 'auto',
   whiteSpace: 'pre-wrap',
   fontFamily: 'Times New Roman',
   fontWeight: 'bold',
   marginLeft: 'auto',
   textAlign: 'justify',
   display: 'flex',
   alignItems: 'center',
 },
 assistantMessage: {
   background: 'linear-gradient(to bottom, #003366 0%, #000000 100%)',
   color: '#fff',
   padding: '10px 15px',
   borderRadius: '15px',
   margin: '5px 0',
   maxWidth: '90%',
   wordWrap: 'break-word',
   overflowWrap: 'break-word',
   hyphens: 'auto',
   whiteSpace: 'pre-wrap', 
   fontFamily: 'Times New Roman',
   fontWeight: 'bold',
   marginRight: 'auto',
   textAlign: 'justify',
   display: 'flex',
   alignItems: 'center',
 },
 form: {
   display: 'flex',
   alignItems: 'center',
   maxWidth: '800px',
   width: '100%',
   margin: '0 auto',
 },
 input: {
   flexGrow: 1,
   padding: '15px',
   fontSize: '18px',
   borderRadius: '10px',
   border: 'none',
   marginRight: '10px',
   fontFamily: 'Times New Roman',
   fontWeight: 'bold',
   color: '#fff',
   background: 'linear-gradient(to bottom, #003366 0%, #000000 100%)',
 },
 button: {
   padding: '15px 20px',
   fontSize: '18px',
   background: 'linear-gradient(to bottom, #336699 0%, #00ccff 100%)',
   color: '#fff',
   border: 'none',
   borderRadius: '10px',
   cursor: 'pointer',
 },
 disclaimer: {
   fontFamily: 'Times New Roman',
   fontSize: '12px',
   color: '#ddd',
   marginTop: '10px',
 },

 '@media (max-width: 768px)': {
   image: {
     width: '120px',
     marginBottom: '25px',
   },
   icon: {
     width: '30px',
     height: '30px',
   },
   userMessage: {
     maxWidth: '80%',
     padding: '8px 12px',
   },
   assistantMessage: {
     maxWidth: '100%',
     padding: '8px 12px',
   },
   input: {
     padding: '12px',
     fontSize: '16px',
   },
   button: {
     padding: '12px 15px',
     fontSize: '16px',
   },
 }
};


export default Chat;


