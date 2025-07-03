import Navbar from "./Components/Navbar"
import Newsboard from "./Components/Newsboard"
import { useState } from "react"
import Footer from "./Components/Footer"
const App = () => {
  const [category,setCategory]= useState("general")
  return (
    <>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
      <Footer />
    </>
  );
};

export default App
