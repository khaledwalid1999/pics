import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import { useState } from "react";

function App() {
  const [images, setImages] = useState({});

  const handleSubmit = async (term) => {
    const response = await searchImages(term);
    console.log("response");
    setImages(response);
    console.log(images);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
