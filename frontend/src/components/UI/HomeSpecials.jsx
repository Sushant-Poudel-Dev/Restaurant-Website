import ChickenMakhani from "../../media/ChickenMakhani.jpg";
import ChaanaShaak from "../../media/ChaanaShaak.jpg";
import GobiMakhani from "../../media/GobiMakhani.jpg";
import SalmonKorma from "../../media/SalmonKorma.jpg";

const HomeSpecials = () => {
  return (
    <div className='homeSpecials'>
      <h2>Special Menu</h2>
      <div className='specialsContainer'>
        <div className='specialsList'>
          <div className='specialItem'>
            <div className='specialImage'>
              <img
                src={ChaanaShaak}
                alt='Chaana Shaak'
              />
            </div>
            <div className='specialContent'>
              <div className='specialInfo'>
                <h3>Chaana Shaak</h3>
                <p>
                  Chickpeas sautéed with chopped ‘Paalong Shaak’ (spinach),
                  grilled onion, tomatoes, ginger, and turmeric.
                </p>
              </div>
              <span className='price'>$14.00</span>
            </div>
          </div>
          <div className='specialItem'>
            <div className='specialImage'>
              <img
                src={ChickenMakhani}
                alt='Chicken Makhani'
              />
            </div>
            <div className='specialContent'>
              <div className='specialInfo'>
                <h3>Chicken Makhani</h3>
                <p>
                  Boneless white meat chicken marinated in ‘Tondoori sauce'.
                  Grilled in 'Tondoori Clay Oven'{" "}
                </p>
              </div>
              <span className='price'>$18.99</span>
            </div>
          </div>
          <div className='specialItem'>
            <div className='specialImage'>
              <img
                src={GobiMakhani}
                alt='Gobi Makhani'
              />
            </div>
            <div className='specialContent'>
              <div className='specialInfo'>
                <h3>Govi Makhani</h3>
                <p>
                  Cauliflower florets sautéed with grilled onion, tomatoes,
                  ginger in mildly spiced Makhani sauce.
                </p>
              </div>
              <span className='price'>$15.99</span>
            </div>
          </div>
          <div className='specialItem'>
            <div className='specialImage'>
              <img
                src={SalmonKorma}
                alt='Salmon Korma'
              />
            </div>
            <div className='specialContent'>
              <div className='specialInfo'>
                <h3>Salmon Korma</h3>
                <p>
                  Mildly spiced dish with turmeric, fresh chopped garlic, ginger
                  in a thick creamy sauce.
                </p>
              </div>
              <span className='price'>$17.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSpecials;
