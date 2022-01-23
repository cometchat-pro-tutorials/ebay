import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../context/AppContext';

import * as routeService from '../../services/route';
import * as ROUTE from '../../constants/routes';

const Header = () => {
  const {
    user,
    setUser,
    cometChat
  } = useContext(Context);

  const history = useHistory();

  const sell = () => {
    routeService.navigate({ route: ROUTE.SELL, push: history.push });
  };

  const logout = async () => {
    const isLogout = window.confirm('Do you want to log out ?');
    if (isLogout) {
      await logoutCometChat();
      removeAuthedInfo();
      routeService.navigate({ route: ROUTE.HOME, push: history.push });
    }
  }

  const logoutCometChat = async () => {
    await cometChat.logout();
  };

  const removeAuthedInfo = () => {
    setUser(null);
    localStorage.removeItem('auth');
  };

  if (!user) return <></>;
 
  return (
    <div className="header">
      <div className="header__left">
        {
          user && (
            <div className="header__right">
              <div className="header__image-wrapper">
                <img src={user.avatar} alt={user.email} />
              </div>
              <span>Hello, {user.fullname}</span>
            </div>
          )
        }
      </div>
      <div className="header__actions">
        <span className="header__action-title" onClick={sell}><span>Sell</span></span>
        <span className="header__action-title"><span>Wishlist</span></span>
        <span className="header__action-title"><span>Cart</span></span>
        <span className="header__action-title" onClick={logout}><span>Logout</span></span>
      </div>
    </div>
  );
}

export default Header;