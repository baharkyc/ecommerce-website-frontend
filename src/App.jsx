import { ToastContainer } from 'react-toastify'
import HomePage from './pages/HomePage'
import { Route, Switch } from 'react-router-dom';
import HomePage2 from './pages/HomePage2';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/2" >
          <HomePage2/>
        </Route>
      </Switch>
      
      <ToastContainer/>
    </div>
  )
}

export default App;

