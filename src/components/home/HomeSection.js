import HomeSectionTitle from "./HomeSectionTitle";
import HomeSectionItem from './HomeSectionItem';

const HomeSection = ({ title, data }) => {

  if (!data || !data.length) return <></>;

  return (
    <div className="home__section">
      <HomeSectionTitle title={title} />
      <div className="home__sectionc">
        {data.map(item => <HomeSectionItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default HomeSection;