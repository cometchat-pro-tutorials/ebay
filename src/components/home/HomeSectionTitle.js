import nextBlack from '../../images/next-black.png';

const HomeSectionTitle = ({ title }) => {
  return (
    <div className="home__sectiont">
      <span className="home__sectiont--big">{title}</span>
      <div>
        <span className="home__sectiont--small">See all</span>
        <img src={nextBlack} alt="next"/>
      </div>
    </div>
  );
};

export default HomeSectionTitle;