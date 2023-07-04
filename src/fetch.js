import React, { useEffect, useState } from 'react';

const SomeComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => {
          controller.abort(); // Abort the fetch request after 20 seconds
        }, 20000);

        const response = await fetch('someurl', { signal: controller.signal });
        clearTimeout(timeout);

        if (!response.ok) {
          throw new Error('API request failed');
        }

        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
        // Handle error here
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Render the data or an error message */}
      {data ? <p>Data: {JSON.stringify(data)}</p> : <p>Loading...</p>}
    </div>
  );
};

export default SomeComponent;
