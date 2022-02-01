import banner from '../../images/banner.webp';
import next from '../../images/next.png';

const HomeBanner = () => {
  return (
    <div className="home__banner">
      <img src={banner} alt="banner" />
      <div className="home__bannert">
        <span className="home__bannert--big">A World of Vehicles</span>
        <span className="home__bannert--small">Find the parts you need for cars, motorbikes and more.</span>
        <button className="home__bannerbtn">
          Shop Now
          <img src={next} alt="next" />
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;