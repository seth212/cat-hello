import { useEffect, useState } from "react";
import Header from "./components/Header";
import CatImage from "./components/CatImage";

function App() {
  const [cat, setCat] = useState();

  async function getCats() {
    const response = await fetch("https://cataas.com/cat/cute/says/hello");

    const newCat = response.url;

    setCat(newCat);
  }

  useEffect(() => {
    getCats();
  }, [cat]);

  return (
    <>
      <Header />
      <div className="button-div">
        <button onClick={setCat}>Next cat please</button>
      </div>
      <CatImage cat ={cat}/>

    </>
  );
}

export default App;
