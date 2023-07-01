// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {

  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount(count + 1)
  }

  useEffect(()=>{
    document.title=`${count} new message!`
  })

  return (
    <div className="App">
      <header className="App-header">
        <h3>
          {count} new message
        </h3>
        <button onClick={handleCount}>
          click to add {count}
        </button>
      </header>
    </div>
  );
}

export default App;
