function SearchBar({ setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search projects..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ padding: "8px", margin: "10px", width: "200px" }}
    />
  );
}

export default SearchBar;