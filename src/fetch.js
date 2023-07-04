import React, { useEffect, useState } from 'react';

const FetchComponent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => {
          controller.abort(); // Abort the fetch request after 20 seconds
        }, 20000);

        const response = await fetch('https://dummyjson.com/product', { signal: controller.signal });
        clearTimeout(timeout);

        if (!response.ok) {
          throw new Error('API request failed');
        }

        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error.message);
        // Handle error here
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Render the data or an error message */}
      {/* {data ? <p>Data: {JSON.stringify(data)}</p> : <p>Loading...</p>} */}
      {error !== "" && error}
      {JSON.stringify(data.map((product, index)=>{
        return <h3 key={index}>{product.title} - ${product.price}</h3>
      }))}
    </div>
  );
};

export default FetchComponent;
