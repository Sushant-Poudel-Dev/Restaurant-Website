import HeroImage from "../../media/HeroFoodImage.jpg";

const HomeHero = () => {
  return (
    <>
      <div className='homeHero'>
        <div className='heroText'>
          <h1>Welcome to the Niramesh Indian Cuisine</h1>
          <p>
            We are a family-owned restaurant that serves authentic Indian
            cuisine. Our dishes are made with fresh ingredients and traditional
            spices. We offer a variety of vegetarian and non-vegetarian dishes.
          </p>
          <button>Order Now</button>
        </div>
        <div className='heroImage'>
          <img
            src={HeroImage}
            alt='HeroImage'
          />
        </div>
      </div>
    </>
  );
};

export default HomeHero;
