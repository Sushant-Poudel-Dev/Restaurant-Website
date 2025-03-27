import { useState } from "react";
import { toast } from "react-toastify";
import PlaceholderImage from "../../media/Placeholder.jpg";
import { useCart } from "../../context/CartContext";

const Menu = ({ category }) => {
  const [imageErrors, setImageErrors] = useState({});
  const [cartItems, setCartItems] = useState({});
  const [addedToCart, setAddedToCart] = useState({});
  const { addToCart } = useCart();

  if (!category) return null;

  const handleImageError = (itemId) => {
    setImageErrors((prev) => ({
      ...prev,
      [itemId]: true,
    }));
  };

  const formatPrice = (price) => {
    return typeof price === "number" ? price.toFixed(2) : "0.00";
  };

  const handleAddToCart = (itemId) => {
    const quantity = cartItems[itemId] || 1;
    setAddedToCart((prev) => ({
      ...prev,
      [itemId]: quantity,
    }));
    addToCart(quantity);

    // Show toast notification
    toast.success(`Added ${quantity} item${quantity > 1 ? "s" : ""} to cart`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 1) - 1, 1),
    }));
  };

  const handleIncreaseQuantity = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 1) + 1,
    }));
  };

  return (
    <>
      <div className='menu'>
        <div className='menuMain'>
          {category.items.map((item) => (
            <div
              className='menuItem'
              key={item.id}
            >
              <div className='menuItemLeft'>
                <div className='menuItemImage'>
                  <img
                    src={imageErrors[item.id] ? PlaceholderImage : item.image}
                    alt={item.name}
                    onError={() => handleImageError(item.id)}
                  />
                </div>
                <div className='menuItemInfo'>
                  <h2>{item.name}</h2>
                  {item.description && <p>{item.description}</p>}
                </div>
              </div>
              <div className='menuItemRight'>
                <p className='price'>${formatPrice(item.price)}</p>
                <div className='cartSection'>
                  <div className='cartControls'>
                    <button onClick={() => handleRemoveFromCart(item.id)}>
                      -
                    </button>
                    <span>{cartItems[item.id] || 1}</span>
                    <button onClick={() => handleIncreaseQuantity(item.id)}>
                      +
                    </button>
                  </div>
                  <button
                    className='addToCartBtn'
                    onClick={() => handleAddToCart(item.id)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
