import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import AddOneCard from './Addonecard'
import { BrowserRouter as Router, Route, Link, Switch ,Redirect} from 'react-router-dom'; 

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
      
      <Route  path='/Addonecard' component={AddOneCard}></Route> 
      <Route  path='' component={App}></Route> 
     
     
     
     </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
//jghfghj
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
