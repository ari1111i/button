// import React, { useState } from 'react';

// const Button = () => {
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     setIsClicked(!isClicked);
//   };

//   const buttonStyles = {
//     backgroundColor: isClicked ? 'red' : 'blue',
//     color: 'white',
//     padding: '10px',
//     border: 'none',
//     cursor: 'pointer',
//   };

//   return (
//     <button style={buttonStyles} onClick={handleClick}>
//       Кнопка
//     </button>
//   );
// };

// export default Button;


import React from 'react'
import Main from './components/button/Main'

const App = () => {
  return (
    <div>
       <Main/>
    </div>
  )
}

export default App
