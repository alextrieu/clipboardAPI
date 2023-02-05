import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [message, setMessage] = useState('Click to copy');
  
  function handleClick() {
    setMessage('✓ Copied to clipboard');
  }

  useEffect(() => {
    const copyButton = document.querySelector('.copybutton');
    if (copyButton) {
      copyButton.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(copyButton.innerHTML);
        } catch (err) {
          console.error('Could not write to clipboard', err);
        }
      });
    }

    return () => {
      if (copyButton) {
        copyButton.removeEventListener('click', async () => {});
      }
    };
  }, []);


  

  return (
    <div className="App">
      <div className="text-container">
        <span>This is </span>
        <a className='copy-button' onClick={handleClick}>a string you can copy</a>
        <p className='copy-popup'>{message}</p>
      </div>
    </div>
  )
}

export default App
