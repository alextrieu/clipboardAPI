import React, { useState, useRef } from 'react'
import './App.css'

function App() {

  const [message, setMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef();
  
  function handleClick(e) {
    const btnVal = e.target.value;
    try {
      navigator.clipboard.writeText(btnVal);
      setMessage('✓ Copied to clipboard');
      onClickAgain();
    } catch (err) {
      console.error('Could not write to clipboard', err);
    }
  }

  function onMouseEnter() {
    clearTimeout(timeoutRef.current);
    setMessage('Click to copy');
    setIsHovered(true);
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 3000);
  }

  function onClickAgain() {
    clearTimeout(timeoutRef.current);
    setIsHovered(true);
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 3000);
  }

  function onMouseLeave() {
    clearTimeout(timeoutRef.current);
    setIsHovered(false);
    timeoutRef.current = setTimeout(() => {
      setMessage('');
    }, 3000);
  }
  

  return (
    <div className="App">
      <div className="text-container">
        <span>This is </span>
        <button className='copy-button' value ="a string you can copy" onClick={handleClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>a string you can copy</button>
        {isHovered ? <span className={`copy-popup animate__animated animate__heartBeat`}>{message}</span> : (message !== '' ? <span className={`copy-popup animate__animated animate__fadeOut`}>{message}</span> : null)}
      </div>
    </div>
  )
}

export default App
