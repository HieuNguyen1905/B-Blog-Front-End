import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContext, AuthContextProvider } from './context/authContext';



ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root'));
