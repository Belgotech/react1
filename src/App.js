// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {

  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const handleCount = () => {
    setCount(count + 1)
  }
  const handleCount2 = () => {
    setCount2(count2 + 1)
  }

  useEffect(()=>{
    document.title=`${count} new message and ${count2} calls!`
  },)

  return (
    <div className="App">
      <header className="App-header">
        <h3>
          {count} new message
        </h3>
        <h3>
          {count2} new calls
        </h3>
        <button onClick={handleCount}>
          click to add {count}
        </button>
        <button onClick={handleCount2}>
          click to add {count2}
        </button>
      </header>
    </div>
  );
}

export default App;
