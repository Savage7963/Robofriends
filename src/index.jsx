import React from 'react';
import ReactDOM from 'react-dom/client'; //react can be used in multiple places it is used for DOM websites  

import './index.css'; // react allows us to add css not just in one file but for each different conponent 



import App from './containers/App'
// instead of making different different components we will make father of components whcih will provide the different different components
import 'tachyons';

import {robots} from './robots'
// ./ means in same directory 

// service workers        
// import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
// intro to props /properties it can be called anything it can be called Html attributes 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// greeetings={"Hellow"+"React Ninjja"}


// State is simpily is description of your app AN OBJECT that describes your application the state which describe my application is robots and whatever is entered in search bar State is able to change abole to change the value of the search box the value of the input and we are able to change the robots it means what gets displayed you need to remember this rule 

//  Props are simily things that come out of state so a parent feeds state into a child component and as soon as the child component recives a state its a property that child can never change a property the parent just tells it what the state is the child recives it as robots 
reportWebVitals();
