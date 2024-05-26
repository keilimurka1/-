import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close();  // Используйте круглые скобки для вызова метода close
  }

  return (
    <div className="App">
      <h1>Hel1lo</h1>
      <button onClick={onClose}>З4акрыть</button>
    </div>
  );
}

export default App;
