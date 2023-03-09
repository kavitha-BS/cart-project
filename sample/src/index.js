import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';
import store from './components/redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>
  <Provider store={store}>
  <RouterProvider router={routes}>
        </RouterProvider>
  </Provider>
);

