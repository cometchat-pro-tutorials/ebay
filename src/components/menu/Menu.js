import { useState, useEffect, useContext } from 'react';

import MenuItem from './MenuItem';

import { Context } from '../../context/AppContext';

import * as menuService from '../../services/menu';

const Menu = () => {
  const [menu, setMenu] = useState([]);

  const { user } = useContext(Context);

  useEffect(() => {
    const menu = menuService.getMenu();
    setMenu(() => menu);
  }, []);

  if (!menu || !menu.length || !user) return <></>;

  return (
    <div className="menu">
      {menu.map(item => <MenuItem key={item.id} menu={item} />)}
    </div>
  );
};

export default Menu;