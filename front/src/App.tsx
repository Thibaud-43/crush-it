import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Lorsque le composant est monté, effectuez la requête fetch
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000");
      console.log(response);
      const jsonData = await response.text();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(
        "Une erreur s'est produite lors de la récupération des données :",
        error
      );
    }
  };

  return (
    <>
      {loading ? (
        <div className="App">loading...</div>
      ) : (
        <div className="App">{data}</div>
      )}
    </>
  );
}

export default App;
