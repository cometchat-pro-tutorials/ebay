const SearchCategoryItem = ({ category }) => {

  if (!category) return <></>;

  return (
    <div className="search__cai">
      <span>{category.title}</span>
    </div>
  );
};

export default SearchCategoryItem;