// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import axios from "./axios"
import photoGallery from "./fef";

function App() {

  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [products, setProducts] = useState([])
  const [error, setError] = useState([])

  const handleCount = () => {
    setCount(count + 1)
  }
  const handleCount2 = () => {
    setCount2(count2 + 1)
  }

  useEffect(() => {
    getProduct()
    // axios
    //   .get('/products')
    //   .then((response) => { setProducts(response.data.products) })
    //   .catch((error)=> setError(error.message))
  }, [])

  async function getProduct (){
    try{
    const response = await axios.get("/product")
    console.log(response)
    setProducts(response.data.products)
  } catch (error){
    setError(error.message)
  }
  }

  useEffect(() => {
    document.title = `${count} new message and ${count2} calls!`
  }, [ count, count2])

  return (
    <div className="App">
      <header className="App-header">
        <photoGallery />
        <div>
          {error !== "" && error}
          {products.map((product, index)=>{
            return<h3 key={index}>
              {product.title} - ${product.price}
            </h3>
          })}
        </div>
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
