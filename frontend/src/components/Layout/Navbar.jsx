import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <>
      <div className='navbar'>
        <div className='navbarLogo'>
          <Link to='/'>
            <h2>Logo</h2>
          </Link>
        </div>
        <div className='navbarLinks'>
          <ul>
            <li>
              <Link to='/menu'>Menu</Link>
            </li>
            <li>
              <Link to='/menu'>About</Link>
            </li>
            <li>
              <Link to='/menu'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className='navbarCart'>
          <span className='logo'>
            <BsCart2 />
            {cartCount > 0 && <span className='cartCount'>{cartCount}</span>}
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
