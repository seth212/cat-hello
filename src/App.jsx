import { useEffect, useState } from "react";
import Header from "./components/Header";



function App () {

  const [cat, setCat] = useState()

  async function getCats() {
    const response = await fetch("https://cataas.com/cat/cute/says/hello");


    const newCat = response.url
    console.log(newCat)

   setCat(newCat)
  }
  
  useEffect(() => {
    getCats()
  },[cat])

  return (
    <>
      <Header />
      <div className="button-div">
        <button onClick={setCat}>Next cat please</button>
      </div>
      <div className="cat-image-div ">
        <img src={cat} alt="" />
      </div>
    </>
  );
}

export default App;