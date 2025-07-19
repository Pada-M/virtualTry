import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">VirtualTry</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
};

export default Navbar;
