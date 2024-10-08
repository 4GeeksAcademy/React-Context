//import react into the bundle
import React from 'react'
import ReactDOM from 'react-dom';
import Provider from './store/indexStore';


//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import { Home } from './views/home';


//render your react application
ReactDOM.render(
    <Provider>
        <Home/>
    </Provider>

, (document.querySelector("#app")));

