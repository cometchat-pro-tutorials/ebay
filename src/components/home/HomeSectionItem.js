const HomeSectionItem = ({ item }) => {
  
  if (!item) return <></>;

  return (
    <div className="home__sectioni">
      <div className="home__sectionii">
        <img src={item.image} alt="home" />
      </div>
      <span>{item.title}</span>
    </div>
  )
};

export default HomeSectionItem;