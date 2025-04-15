import { ToastContainer } from 'react-toastify'
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopPage from './pages/ShopPage';
import HomePage from './pages/HomePage'



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
      </Switch>
      
      <ToastContainer/>
    </div>
  )
}

export default App;

