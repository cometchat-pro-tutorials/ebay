import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { AppContext } from './context/AppContext';
import Header from './components/common/Header';
import Home from './components/home/Home';
import Loading from './components/common/Loading';
import Login from './components/login/Login';
import PrivateRoute from './components/common/PrivateRoute';
import Search from './components/search/Search';
import Sell from './components/sell/Sell';

import './index.css';

function App() {
  return (
    <AppContext>
      <Router>
        <Header />
        <Search />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/sell" component={Sell} />
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
