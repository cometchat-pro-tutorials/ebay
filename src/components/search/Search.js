import { useRef, useContext } from 'react';
import { useHistory } from 'react-router';

import { Context } from '../../context/AppContext';

import * as routeService from '../../services/route';
import * as storageService from '../../services/storage';

import * as ROUTE from '../../constants/routes';
import * as STORAGE_KEYS from '../../constants/storage-keys';

import arrow from '../../images/arrow.svg';
import search from '../../images/search.png';

const Search = () => {
  const searchRef = useRef(null);

  const { user } = useContext(Context);

  const history = useHistory();

  const home = () => {
    routeService.navigate({ route: ROUTE.HOME, push: history.push });
  };

  const searchProducts = () => {
    const keywords = searchRef.current.value;
    if (keywords) {
      storageService.save({ key: STORAGE_KEYS.KEYWORD, payload: keywords });
      searchOrReload();
      searchRef.current.value = '';
    }
  };

  const searchOrReload = () => {
    const url = window.location.href;
    if (url.includes(ROUTE.SEARCH)) {
      window.location.reload();
    } else {
      routeService.navigate({ route: ROUTE.SEARCH, push: history.push });
    }
  };

  if (!user) return <></>;

  return (
    <div className="search">
      <div className="search__container">
        <img onClick={home} className="search__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png" alt="logo" />
        <div className="search__category">
          <span>Shop By Category</span>
          <img className="search__arrow" src={arrow} alt="arrow" />
        </div>
        <div className="search__form">
          <img className="search__formic" src={search} alt="search" />
          <input className="search__formi" type="text" placeholder="Search for anything" ref={searchRef} />
          <div className="search__formca">
            <span>All Categories</span>
            <img className="search__formcaarrow" src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="search__forma">
          <button onClick={searchProducts}>Search</button>
          <span>Advanced</span>
        </div>
      </div>
    </div>
  );
};

export default Search;