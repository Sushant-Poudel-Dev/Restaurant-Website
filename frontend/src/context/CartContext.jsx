import React from "react";
import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [claimedRewards, setClaimedRewards] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const currentReward = useMemo(() => {
    if (cartTotal >= 90) return "Free Samosa";
    if (cartTotal >= 40) return "Free Butter Naan";
    if (cartTotal >= 20) return "Free Plain Naan";
    return null;
  }, [cartTotal]);

  const rewardProgress = useMemo(() => {
    if (cartTotal >= 90)
      return { progress: 100, nextTarget: 90, reward: "Free Samosa" };
    if (cartTotal >= 40)
      return {
        progress: (cartTotal / 90) * 100,
        nextTarget: 90,
        reward: "Free Butter Naan",
      };
    if (cartTotal >= 20)
      return {
        progress: (cartTotal / 40) * 100,
        nextTarget: 40,
        reward: "Free Plain Naan",
      };
    return { progress: (cartTotal / 20) * 100, nextTarget: 20, reward: null };
  }, [cartTotal]);

  const addToCart = useCallback((item) => {
    setCartItems((prev) => {
      const newItems = [...prev];
      const existingItem = newItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        newItems.push(item);
      }

      // Calculate totals from the new items array
      const totals = newItems.reduce(
        (acc, i) => ({
          count: acc.count + i.quantity,
          total: acc.total + i.price * i.quantity,
        }),
        { count: 0, total: 0 }
      );

      // Update counts in a single operation
      setCartCount(totals.count);
      setCartTotal(totals.total);

      return newItems;
    });
  }, []);

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newItems = prev.filter((item) => item.id !== itemId);
      const totals = newItems.reduce(
        (acc, i) => ({
          count: acc.count + i.quantity,
          total: acc.total + i.price * i.quantity,
        }),
        { count: 0, total: 0 }
      );

      setCartCount(totals.count);
      setCartTotal(totals.total);
      return newItems;
    });
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prev) => {
      const newItems = prev.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
      const totals = newItems.reduce(
        (acc, i) => ({
          count: acc.count + i.quantity,
          total: acc.total + i.price * i.quantity,
        }),
        { count: 0, total: 0 }
      );

      setCartCount(totals.count);
      setCartTotal(totals.total);
      return newItems;
    });
  };

  const claimReward = (target) => {
    if (!claimedRewards.includes(target) && cartTotal >= target) {
      setClaimedRewards((prev) => [...prev, target]);

      // Add reward as a cart item
      const rewardItem = {
        id: `reward-${target}`,
        name:
          target === 90
            ? "Samosa (Reward)"
            : target === 40
            ? "Butter Naan (Reward)"
            : "Plain Naan (Reward)",
        price: 0,
        quantity: 1,
        isReward: true,
      };

      setCartItems((prev) => [...prev, rewardItem]);
      return true;
    }
    return false;
  };

  return (
    <CartContext.Provider
      value={{
        cartCount,
        cartTotal,
        currentReward,
        rewardProgress,
        claimedRewards,
        claimReward,
        addToCart,
        cartItems,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
