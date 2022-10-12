import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import 'bootstrap/dist/css/bootstrap.min.css'
import FirestoreContext from './context/databaseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirestoreContext>
      <App/>
    </FirestoreContext>
  </React.StrictMode>
);
