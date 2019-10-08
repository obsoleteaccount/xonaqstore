import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';//component we want to wrap round our app, coz we want everything to have access to store object we get from redux
//provider is component that is parent of everything in our app.as a parent it allows us to get access to everything related to the store
import './index.css';
import App from './App';

import store from './redux/store';

ReactDOM.render(
     <Provider store={store}>
          <BrowserRouter>
               <App />
          </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

