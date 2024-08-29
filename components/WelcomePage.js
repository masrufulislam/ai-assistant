import React from 'react';

const WelcomePage = ({ onStart }) => {
  return (
    <div style={styles.container}>
      <button onClick={onStart} style={styles.button}>
        Start Chat
      </button>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    backgroundImage: 'url(/akhi.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    '@media (max-width: 768px)': {
      backgroundImage: 'url(/akhiai.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  },
  button: {
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: '27%',
    right: '38%',
    padding: '20px 40px',
    fontSize: '23px',
    cursor: 'pointer',
    background: 'linear-gradient(to bottom, #33cccc 0%, #003366 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    transform: 'translate(50%, 50%)',
  },
};

export default WelcomePage;

// import React from 'react';
// import { useRouter } from 'next/router';

// const WelcomePage = () => {
//   const router = useRouter();

//   const handleStartChat = () => {
//     router.push('/chat'); // Assuming the Chat page is located at /chat
//   };

//   return (
//     <div style={styles.container}>
//       <button onClick={handleStartChat} style={styles.button}>
//         Start Chat
//       </button>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     height: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'black',
//     backgroundImage: 'url(/akhi.png)',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     position: 'relative',
//     '@media (max-width: 768px)': {
//       backgroundImage: 'url(/akhiai.png)',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//     },
//   },
//   button: {
//     fontFamily: 'Times New Roman',
//     fontWeight: 'bold',
//     position: 'absolute',
//     bottom: '27%',
//     right: '38%',
//     padding: '20px 40px',
//     fontSize: '23px',
//     cursor: 'pointer',
//     background: 'linear-gradient(to bottom, #33cccc 0%, #003366 100%)',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     transform: 'translate(50%, 50%)',
//   },
// };

// export default WelcomePage;