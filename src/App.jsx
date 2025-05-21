import { ToastContainer } from 'react-toastify'
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserByToken } from './store/actions/authActions';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopPage from './pages/ShopPage';
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import CreateOrderPage from './pages/CreateOrderPage';
import PrivateRoute from './components/PrivateRoute';
import OrderSuccessPage from './pages/OrderSuccessPage';


function App() {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserByToken());
  }, [dispatch]);

  return (
    <div>
      <Switch>

        <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" >
          <ProductDetailPage/>
        </Route>

        <Route path="/" exact>
          <HomePage/>
        </Route>

        <Route path="/shop" exact>
          <ShopPage/>
        </Route>

        <Route path="/shop/:gender/:categoryPath/:categoryId" exact>
          <ShopPage/>
        </Route>

        <Route path="/contact">
          <ContactPage/>
        </Route>

        <Route path="/team">
          <TeamPage/>
        </Route>

        <Route path="/about">
          <AboutPage/>
        </Route>

        <Route path="/signup">
          <SignUpPage/>
        </Route>

        <Route path="/login">
          <LoginPage/>
        </Route>

        <Route path="/cart">
          <ShoppingCartPage/>
        </Route>

        <PrivateRoute path="/createOrder">
          <CreateOrderPage/>
        </PrivateRoute>

        <PrivateRoute path="/orderSuccess">
          <OrderSuccessPage/>
        </PrivateRoute>
  
      </Switch>
      
      <ToastContainer/>
    </div>
  )
}

export default App;

