import { useState } from "react";
import "./App.css";
import CategoryGallery from "./category_gallery/category_card.jsx";
import Header from "./components/Header.jsx";
import SearchComponent from "./searchbar/searchComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <SearchComponent />
      <br></br>
      <CategoryGallery />
    </>
  );
}

export default App;
