import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { AppContext } from './context/AppContext';
import Cart from './components/cart/Cart';
import Chat from './components/chat/Chat';
import ChatWithSeller from './components/chat/ChatWithSeller';
import Header from './components/common/Header';
import Home from './components/home/Home';
import Loading from './components/common/Loading';
import Login from './components/login/Login';
import Payment from './components/payment/Payment';
import PrivateRoute from './components/common/PrivateRoute';
import Search from './components/search/Search';
import SearchProducts from './components/search/SearchProducts';
import Wishlist from './components/wishlist/Wishlist';

import './index.css';

function App() {
  return (
    <AppContext>
      <Router>
        <Header />
        <Search />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/search" component={SearchProducts} />
          <PrivateRoute exact path="/wishlist" component={Wishlist} />
          <PrivateRoute exact path="/cart" component={Cart} />
          <PrivateRoute exact path="/payment" component={Payment} />
          <PrivateRoute exact path="/chat" component={Chat} />
          <PrivateRoute exact path="/seller" component={ChatWithSeller} />
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
      <Loading />
    </AppContext>
  );
}

export default App;
