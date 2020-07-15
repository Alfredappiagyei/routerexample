import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import './App.css';

import {

  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";





export default function App() {
  return (
    <Router> 
      
      <div>
      
        
               <ul  style={{display:"flex",}}>
            
                <li>
                <Link to="/"><b>Home</b> </Link>
                  </li>
                <li>
                <Link to="/About"><b>About</b></Link>
                  </li>
                <li>
                <Link to="/Services"><b>Services</b> </Link>
                  </li>
                <li>
                <Link to="/Portfolio"><b>Portfolio</b></Link>
                  </li>
                  <li>
                <Link to="/Contacts"><b>Contacts</b></Link>
                  </li>
              </ul>
           

            <Switch>
              <Route path="/" exact component={Home}  />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/portfolio" component={Portfolio} />
             </Switch>
      
    
            </div>
      </Router>
  );
}



