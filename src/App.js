import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
import PrivateRoute from './components/Private/PrivateRoute';
import BookNow from './components/BookNow/BookNow';
import NotFound from './components/NotFound/NotFound';
import AddService from './components/AddService/AddService';
import MyOrder from './components/MyOrder/MyOrder';
import AllOrder from './components/AllOrder/AllOrder';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/banner">
            <Banner></Banner>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/booknow/:bookNowDtls">
            <BookNow></BookNow>
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/myOrder">
            <MyOrder></MyOrder>
          </Route>
          <Route path="/allOrder">
            <AllOrder></AllOrder>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
