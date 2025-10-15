//main.jsx
//Entry point of the application.
//Renders the root components and wraps it with providers -> Redux + Router
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import {store} from './store/store.js';


//Mount React application to DOM and wrap with Redux and React Router.
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  
);
