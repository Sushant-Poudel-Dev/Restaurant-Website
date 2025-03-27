import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footerTop'>
          <div className='footerExclusive'>
            <h3>Exclusive</h3>
            <p>Get 10% off on your first order</p>
            <input
              type='email'
              placeholder='Enter your email'
            />
          </div>
          <div className='footerLinks'>
            <div>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Items</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>My Account</h3>
              <ul>
                <li>
                  <a>Cart</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Opening Hours</h3>
              <ul>
                <li>Sunday to Saturday</li>
                <li>3:15 PM to 11:00 PM</li>
              </ul>
            </div>
          </div>
          <div className='footerSocials'>
            <h3>Follow Us</h3>
            <div>
              <span className='logo'>
                <CiFacebook />
              </span>
              <span className='logo'>
                <CiInstagram />
              </span>
              <span className='logo'>
                <CiTwitter />
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className='footerBottom'>
            <div>
              <p>&copy; 2021 All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
