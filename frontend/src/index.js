import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';
// import store from './redux/store';
// import { Provider } from 'react-redux';

ReactDOM.render(
    // <Provider store = {store}>
    <AuthProvider>
        <App />
    </AuthProvider>,
    // </Provider>
    document.getElementById('root')
);
