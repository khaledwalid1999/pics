import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import { useState } from "react";

function App() {
  const [images, setImages] = useState({});

  const handleSubmit = (term) => {
    setImages(searchImages(term));
    console.log(images);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
