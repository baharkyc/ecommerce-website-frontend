import { ToastContainer } from 'react-toastify'
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopPage from './pages/ShopPage';
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';



function App() {

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/shop" >
          <ShopPage/>
        </Route>
        <Route path="/product" >
          <ProductDetailPage/>
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
      </Switch>
      
      <ToastContainer/>
    </div>
  )
}

export default App;

