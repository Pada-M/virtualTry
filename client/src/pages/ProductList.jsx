import products from "../assets/product";
import { Link } from "react-router-dom";

function ProductList() {
  console.log("ProductList rendered");
  return (
    <div>
      <h2>All Products</h2>
      {products.map(product => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <img src={product.imageUrl} alt={product.name} />
          <p>{product.name}</p>
        </Link>
      ))}
    </div>
  );
}
export default ProductList;