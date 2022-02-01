import { useState, useEffect } from 'react';

import SearchCategoryItem from './SearchCategoryItem';

import * as categoryService from '../../services/category';

const SearchCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(() => categoryService.getSearchCategories());
  }, []);

  if (!categories || !categories.length) return <></>;

  return (
    <div className="search__ca"> 
      {categories.map(category => <SearchCategoryItem key={category.id} category={category} />)}
    </div>
  );
};

export default SearchCategories;