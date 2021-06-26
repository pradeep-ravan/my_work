import Movies from './components/Movies'
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path ='/' component={Home}/>
      <Route  path ='/movies' component={Movies}/>
      {/* <Route  path ='/about' component={About}/> */}
      <Route path='/about' render={(props)=>{ return <About {...props} isAuth={true} />}}/>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
