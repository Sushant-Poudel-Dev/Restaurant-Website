import DineIn from "../../media/DineIn.jpg";
import Takeway from "../../media/Takeway.jpg";
import Catering from "../../media/Catering.jpg";

const HomeServices = () => {
  return (
    <div className='homeServices'>
      <h2>Our Services</h2>
      <div className='servicesContainer'>
        <div className='serviceCard'>
          <div className='serviceImage'>
            <img
              src={DineIn}
              alt='DineIn'
            />
          </div>
          <h3>Dine In</h3>
          <p>Experience authentic Indian cuisine in our welcoming atmosphere</p>
        </div>
        <div className='serviceCard'>
          <div className='serviceImage'>
            <img
              src={Takeway}
              alt='Takeway'
            />
          </div>
          <h3>Takeaway</h3>
          <p>Enjoy our dishes in the comfort of your home</p>
        </div>
        <div className='serviceCard'>
          <div className='serviceImage'>
            <img
              src={Catering}
              alt='Catering'
            />
          </div>
          <h3>Catering</h3>
          <p>Let us cater your special events with our delicious menu</p>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
