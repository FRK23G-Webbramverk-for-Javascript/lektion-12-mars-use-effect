import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('Körs varje gång ett state uppdateras');
  });

  useEffect(() => {
    console.log('Körs enbart en gång vid sidladdning');
  }, []); // [] betyder kör enbart funktionen vid sidladdning

  useEffect(() => {
    console.log('Körs enbart när count uppdateras');
  }, [count]); // [count] betyder kör funktionen när state count uppdateras

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <main>
      <h2>Count är { count }</h2>
      <button onClick={ handleClick }>Öka med 1</button>
    </main>
  )
}

export default App
