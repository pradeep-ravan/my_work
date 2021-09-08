import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup'
import AuthProvider from './Context/AuthProvider';
import Main from './MaterialUI/Mains';
import Login from './Components/Login';
import Ioa from './Components/Ioa';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute';
import Feed from './Components/Feed';
import Profile from './Homework/Profile'
function App() {
  return (
    <Router>
      <AuthProvider>
      <Switch>
        <PrivateRoute exact path='/' component={Feed}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/profile/:id' component={Profile}/>
      </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
