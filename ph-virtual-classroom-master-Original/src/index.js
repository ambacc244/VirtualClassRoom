import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Application from './Application';
import { Store } from "./redux/Store";
//import {Auth, AuthMessage} from 'react-auth';

// STYLESHEETS //
import './assets/css/styles.css';

const store = Store();

//if(!Auth()){ ReactDOM.render(<AuthMessage />, document.getElementById("root")); }
//else { 
ReactDOM.render(<Provider store={store}><Application /></Provider>, document.getElementById('index'));
//}