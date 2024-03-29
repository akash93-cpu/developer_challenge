import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SignIn from './components/Login';
import Homepage from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const route = (
  <Router>
    <React.StrictMode>
        <Switch>
          <Route exact path="/" component={SignIn}/>
          <Route exact path="/home" component={Homepage}/>
          <Route exact path="/add" component={Add}/>
          <Route exact path="/edit/:id" component={Edit}/>
          </Switch>
    </React.StrictMode>
  </Router>

)
ReactDOM.render(route, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
