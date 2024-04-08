import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from './context/Provider.jsx';
import { Provider } from 'react-redux';
import { store } from './AppState/store.jsx';


// store.subscribe(()=> console.log(store.getState()))

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  {/* store={store} */}
  <Provider store={store}>
  {/* <Provider> */}
  <React.StrictMode>
     <App />
  </React.StrictMode>
  </Provider>
 
  
  </BrowserRouter>
  
)
