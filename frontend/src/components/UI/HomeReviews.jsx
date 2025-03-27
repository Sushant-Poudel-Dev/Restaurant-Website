import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HomeReviews = () => {
  const reviews = [
    {
      stars: 5,
      text: "Authentic Indian flavors, amazing variety of vegetarian dishes!",
      author: "Sarah Johnson",
    },
    {
      stars: 5,
      text: "Best Indian restaurant in town. Love their service!",
      author: "Mike Chen",
    },
    {
      stars: 5,
      text: "The flavors are incredible! Every dish is a masterpiece.",
      author: "Emma Davis",
    },
    {
      stars: 5,
      text: "Perfect blend of traditional and modern Indian cuisine.",
      author: "Raj Patel",
    },
    {
      stars: 5,
      text: "Outstanding vegetarian options. Will definitely come back!",
      author: "Lisa Thompson",
    },
  ];

  return (
    <div className='homeReviews'>
      <h2>What Our Customers Say</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={"auto"}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className='reviewsContainer'
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className='reviewCard'
          >
            <div className='stars'>{"★".repeat(review.stars)}</div>
            <p>{review.text}</p>
            <h4>- {review.author}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeReviews;
