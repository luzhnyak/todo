import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App.jsx';
import TestComponentForRouting from './components/TestComponentForRouting.jsx';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const router = createHashRouter([
  {
    path: '/',
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
  },
  {
    path: '/test',
    element: <TestComponentForRouting />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
