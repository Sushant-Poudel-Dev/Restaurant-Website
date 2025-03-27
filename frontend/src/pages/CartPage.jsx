import { useState } from "react";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const CartPage = () => {
  const {
    cartItems,
    cartTotal,
    claimedRewards,
    removeFromCart,
    updateQuantity,
  } = useCart();
  const [deliveryOption, setDeliveryOption] = useState("delivery");
  const [addressDetails, setAddressDetails] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [pickupTime, setPickupTime] = useState("");

  const getAvailableRewards = () => {
    const rewards = [];
    if (cartTotal >= 90 && !claimedRewards.includes(90))
      rewards.push("Free Samosa");
    if (cartTotal >= 40 && !claimedRewards.includes(40))
      rewards.push("Free Butter Naan");
    if (cartTotal >= 20 && !claimedRewards.includes(20))
      rewards.push("Free Plain Naan");
    return rewards;
  };

  const handleCheckout = () => {
    if (
      deliveryOption === "delivery" &&
      (!addressDetails.street ||
        !addressDetails.city ||
        !addressDetails.state ||
        !addressDetails.zipCode)
    ) {
      toast.error("Please fill in all address details", {
        theme: "dark",
      });
      return;
    }

    if (deliveryOption === "pickup" && !pickupTime) {
      toast.error("Please select a pickup time", {
        theme: "dark",
      });
      return;
    }

    // Proceed with checkout
    const orderDetails = {
      items: cartItems,
      total: cartTotal + (deliveryOption === "delivery" ? 5 : 0),
      deliveryOption,
      ...(deliveryOption === "delivery"
        ? { address: addressDetails }
        : { pickupTime }),
    };

    console.log("Order placed:", orderDetails);
    toast.success("Order placed successfully!", {
      theme: "dark",
    });
  };

  return (
    <div className='cartPage'>
      <div className='cartContainer'>
        <div className='cartLeft'>
          <h2>Your Cart</h2>
          {cartItems.length === 0 ? (
            <p className='emptyCart'>Your cart is empty</p>
          ) : (
            <div className='cartItems'>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className='cartItem'
                >
                  <div className='itemInfo'>
                    {!item.isReward && item.image && (
                      <div className='itemImage'>
                        <img
                          src={item.image}
                          alt={item.name}
                        />
                      </div>
                    )}
                    <div className='itemDetails'>
                      <h3>{item.name}</h3>
                      <p className='itemPrice'>
                        {item.isReward ? (
                          <span className='rewardLabel'>FREE</span>
                        ) : (
                          `$${(item.price * item.quantity).toFixed(2)}`
                        )}
                      </p>
                      {!item.isReward && (
                        <p className='itemUnitPrice'>
                          ${item.price.toFixed(2)} each
                        </p>
                      )}
                    </div>
                  </div>
                  <div className='itemControls'>
                    {!item.isReward && (
                      <div className='quantityControls'>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    )}
                    <button
                      className='removeBtn'
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className='cartRight'>
          <div className='deliveryOptions'>
            <h3>Delivery Options</h3>
            <div className='optionButtons'>
              <button
                className={deliveryOption === "delivery" ? "active" : ""}
                onClick={() => setDeliveryOption("delivery")}
              >
                Delivery
              </button>
              <button
                className={deliveryOption === "pickup" ? "active" : ""}
                onClick={() => setDeliveryOption("pickup")}
              >
                Pickup
              </button>
            </div>

            {deliveryOption === "delivery" ? (
              <div className='addressInput'>
                <label>Delivery Address</label>
                <input
                  type='text'
                  placeholder='Street Address'
                  value={addressDetails.street}
                  onChange={(e) =>
                    setAddressDetails((prev) => ({
                      ...prev,
                      street: e.target.value,
                    }))
                  }
                />
                <input
                  type='text'
                  placeholder='City'
                  value={addressDetails.city}
                  onChange={(e) =>
                    setAddressDetails((prev) => ({
                      ...prev,
                      city: e.target.value,
                    }))
                  }
                />
                <div className='addressRow'>
                  <input
                    type='text'
                    placeholder='State'
                    value={addressDetails.state}
                    onChange={(e) =>
                      setAddressDetails((prev) => ({
                        ...prev,
                        state: e.target.value,
                      }))
                    }
                  />
                  <input
                    type='text'
                    placeholder='ZIP Code'
                    value={addressDetails.zipCode}
                    onChange={(e) =>
                      setAddressDetails((prev) => ({
                        ...prev,
                        zipCode: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            ) : (
              <div className='pickupTime'>
                <label>Pickup Time</label>
                <input
                  type='time'
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                />
              </div>
            )}
          </div>

          <div className='orderSummary'>
            <h3>Order Summary</h3>
            <div className='summaryItem'>
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className='summaryItem'>
              <span>Delivery Fee</span>
              <span>{deliveryOption === "delivery" ? "$5.00" : "$0.00"}</span>
            </div>
            <div className='summaryTotal'>
              <span>Total</span>
              <span>
                $
                {(cartTotal + (deliveryOption === "delivery" ? 5 : 0)).toFixed(
                  2
                )}
              </span>
            </div>
            <button
              className='checkoutBtn'
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
