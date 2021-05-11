const SearchBar = ({filterText, inStockOnly, onFilterTextChange, onInStockChange}) => {
  const handleTextChange = (ev) => {
    if (typeof onFilterTextChange === 'function') {
      onFilterTextChange(ev.target.value);
    }
  };

  const handleInStockChange = (ev) => {
    if (typeof onInStockChange === 'function') {
      onInStockChange(ev.target.checked);
    }
  };

  return (
    <div className="search-bar">
      <form>
        <label>Search
          <input type="text" placeholder="Search products..." value={filterText} onChange={handleTextChange} />
        </label>
        <label>
          <input type="checkbox" checked={inStockOnly} onChange={handleInStockChange} />Only show products in stock
        </label>
      </form>
    </div>
  );
};

export default SearchBar;