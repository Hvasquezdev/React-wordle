import { useEffect, useState } from 'react'
import './App.css'
import { useWord } from './hooks/useWord';

function App() {
  const { word } = useWord();

  // console.log(word)

  return (
    <div className="App">
      <header className='header'>
        <h1>Wordle</h1>
      </header>

      <p>
        Palabra!
        {word}
      </p>
    </div>
  )
}

export default App
