
import { Navi } from './Components/Navigation-1/Navi';
import { About } from './Components/Pages/About';
import { Contact } from './Components/Pages/Contact';
import './App.css';
import { Menu } from './Components/Pages/Menu';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import {Home} from "./Components/Home/Home"
// import { Footerline } from './Components/Footer/Footerline';
// import { Body } from './Components/MainBody/Body';
// import { Header } from './Components/Navigation/Header';



function App() {
  return (
 
    //  {/* <Header/>
    //  <Body/>
    // <Footerline/> */}
    <div>
      <Router>
      <Navi/>
        <Switch>
          <Route path="/Menu">
             <Menu/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/about">
             <About/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
    

  )
}

export default App;
