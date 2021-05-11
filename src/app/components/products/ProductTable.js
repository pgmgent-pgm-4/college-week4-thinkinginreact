import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({products}) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product, index) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow key={`category-${index}`} category={product.category} />
      );
    };

    rows.push(
      <ProductRow key={`product-${index}`} product={product} />
    );

    lastCategory = product.category;
  });

  return (
    <div className="product-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;