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

  const handleAddToCart = (item) => {
    const quantity = cartItems[item.id] || 1;

    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: quantity,
      image: imageErrors[item.id] ? PlaceholderImage : item.image,
    };

    addToCart(cartItem);

    setAddedToCart((prev) => ({
      ...prev,
      [item.id]: quantity,
    }));

    toast.success(
      `Added ${quantity} ${item.name}${quantity > 1 ? "s" : ""} to cart`,
      {
        position: "bottom-right",
        autoClose: 3000,
        theme: "dark",
      }
    );

    // Reset quantity after adding to cart
    setCartItems((prev) => ({
      ...prev,
      [item.id]: 1,
    }));
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
                    onClick={() => handleAddToCart(item)}
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
