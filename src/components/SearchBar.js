function SearchBar() {
  const handleFormSubmit = () => {
    console.log("submit");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input />
      </form>
    </div>
  );
}

export default SearchBar;
