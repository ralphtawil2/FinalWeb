import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import NavigationBar from './components/NavBar';
import Home from './components/Home';
import Footerr from './components/footerT';
import Shop from './components/Shop';

//import Footer from './components/Footer';


import "./styles.css"



function App() {
  /*let Component
    switch (window.location.pathname) {
        case "/login":
          Component=<LogIn/>
          break;
    }*/
  return (
    <>
    <Router>
    
    <NavigationBar />
    <Switch>

      <Route exact path='/'>
        <Home/>
      </Route>


      <Route exact path='/shop'>
        <Shop/>
      </Route>

      <Route exact path='/cart'>

      </Route>

    </Switch>
    <Footerr/>
    
    </Router>
    
    </>
  );
}


export default App;
