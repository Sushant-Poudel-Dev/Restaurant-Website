import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const { cartCount, cartTotal, claimedRewards, claimReward } = useCart();
  const [showRewards, setShowRewards] = useState(false);

  const rewardCards = [
    { target: 20, reward: "Free Plain Naan", icon: "🫓" },
    { target: 40, reward: "Free Butter Naan", icon: "🥖" },
    { target: 90, reward: "Free Samosa", icon: "🔺" },
  ];

  const handleClaimReward = (card) => {
    if (cartTotal >= card.target && !claimedRewards.includes(card.target)) {
      if (claimReward(card.target)) {
        toast.success(`🎁 Claimed: ${card.reward}!`, {
          position: "bottom-right",
          autoClose: 2000,
          theme: "dark",
        });
      }
    }
  };

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
              <Link to='/gallery'>Gallery</Link>
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
          <span
            className='logo'
            onClick={() => setShowRewards(!showRewards)}
            onMouseEnter={() => setShowRewards(true)}
          >
            <Link to='/cart'>
              <BsCart2 />
            </Link>
            {cartCount > 0 && <span className='cartCount'>{cartCount}</span>}
          </span>
          {showRewards && (
            <div
              className='rewardsContainer'
              onMouseLeave={() => setShowRewards(false)}
            >
              {rewardCards.map((card) => (
                <div
                  key={card.target}
                  className={`rewardCard ${
                    cartTotal >= card.target ? "achieved" : ""
                  } ${claimedRewards.includes(card.target) ? "claimed" : ""}`}
                  onClick={() => handleClaimReward(card)}
                >
                  <div className='rewardIcon'>{card.icon}</div>
                  <div className='rewardInfo'>
                    <span className='rewardName'>{card.reward}</span>
                    {cartTotal < card.target ? (
                      <span className='rewardProgress'>
                        ${(card.target - cartTotal).toFixed(2)} more
                      </span>
                    ) : !claimedRewards.includes(card.target) ? (
                      <p className='claimText'>Click to Claim</p>
                    ) : null}
                  </div>
                  <div
                    className='progressBar'
                    style={{
                      width: `${Math.min(
                        (cartTotal / card.target) * 100,
                        100
                      )}%`,
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
