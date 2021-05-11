import { useEffect, useState } from 'react';

import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableProductTable = ({products}) => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let p = products.filter(p => p.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1 || p.category.toLowerCase().indexOf(filterText.toLowerCase()) > -1);
    if (inStockOnly) {
      p = p.filter(p => p.stocked === true);
    };
    setFilteredProducts(p);
  }, [filterText, inStockOnly]);

  return (
    <div className="filterable-product-table">
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={(text) => setFilterText(text)} onInStockChange={(checked) => setInStockOnly(checked)} />
      <ProductTable products={filteredProducts} />
    </div>
  );
};

export default FilterableProductTable;