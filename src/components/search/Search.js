import { useRef, useContext } from 'react';
import { useHistory } from 'react-router';

import { Context } from '../../context/AppContext';

import * as routeService from '../../services/route';
import * as ROUTE from '../../constants/routes';

const Search = () => {
  const searchRef = useRef(null);

  const { user } = useContext(Context);

  const history = useHistory();

  const home = () => {
    routeService.navigate({ route: ROUTE.HOME, push: history.push });
  };

  const searchProducts = () => {
    const keywords = searchRef.current.value;
    if (keywords) {}
  };

  if (!user) return <></>;

  return (
    <div className="search__container">
      <img onClick={home} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png" alt="logo"/>
      <div className="search__input">
        <input type="text" placeholder="Search For Anything" ref={searchRef} />
        <button onClick={searchProducts}>Search</button>
      </div>
    </div>
  );
};

export default Search;