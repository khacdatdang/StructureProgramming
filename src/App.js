import React  from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import homepage from './components/pages/homepage';
import signin from './components/pages/signin';
import signup from './components/pages/signup';
import axios from 'axios';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UserProfile from './components/UserProfile/UserProfile';
import AdminPage from './components/Admin/AdminPage';

// axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://ltct-customer.herokuapp.com/";
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : `` ;
  return config;
});

// axios.defaults.withCredentials = true
function App() {
  return (
    
    <Router>
        <Switch>
          <Route path='/' exact component={homepage} />
          <Route path='/signin' exact component={signin} />
          <Route path='/signup' exact component={signup} />
          <Route path='/userprofile' name = "UserProfile" component={UserProfile} />
          <Route path='/admin' name = "AdminPage" component={AdminPage} />
        
        </Switch>
    </Router>
      
  
  );
}

export default App;
