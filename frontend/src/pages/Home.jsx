import HomeHero from "../components/UI/HomeHero";
import HomeFeatures from "../components/UI/HomeFeatures";
import HomeServices from "../components/UI/HomeServices";
import HomeSpecials from "../components/UI/HomeSpecials";
import HomeReviews from "../components/UI/HomeReviews";
// import Watermark from "../components/UI/Watermark";

const Home = () => {
  return (
    <div className='home'>
      {/* <Watermark /> */}
      <HomeHero />
      <HomeFeatures />
      <HomeServices />
      <HomeSpecials />
      <HomeReviews />
    </div>
  );
};

export default Home;
