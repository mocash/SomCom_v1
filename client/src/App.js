import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Home from './components/homePage/Home';
import About from './components/homePage/About';
import NavBars from './components/NavBars';
function App() {
  return (
   <Router>
 
   <NavBars />


   <Switch>
          
          
          <Route exact path="/">
            <Home />
          </Route>



        </Switch>
  </Router>
  );
}

export default App;
