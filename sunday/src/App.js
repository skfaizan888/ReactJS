
// import { Navi } from './Components/Navigation-1/Navi';
// import { About } from './Components/Pages/About';
// import { Contact } from './Components/Pages/Contact';
import './App.css';
import { Counter2 } from './Components/Counter/Counter2';

import Counterthis1 from "./Components/CounterThis/Counterthis1"
import { Button2 } from './Components/Input/Button2';
import { Input2 } from './Components/Input/Input2';
import Counter4 from './Components/Counter/Counter4';
// import { Menu } from './Components/Pages/Menu';
// import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
// import {Home} from "./Components/Home/Home"
// import { Footerline } from './Components/Footer/Footerline';
// import { Body } from './Components/MainBody/Body';
// import { Header } from './Components/Navigation/Header';
// import {Maped} from "./Components/afroz sir/Maped"
import { Component } from './Components/Practice Home/Component';
import { Counter } from "./Components/CounterClass/CounterClass"



function App() {
  return (

    //  {/* <Header/>
    //  <Body/>
    // <Footerline/> */}
    <div className="App">

      {/* <Router>
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
      </Router> */}
      {/* <Maped/> */}
      <Counter />
      <Counterthis1 />
      <Input2 />
      <Button2 />
      <Component />
      <Counter2 />
      <Counter4 />
    </div>



  )
}

export default App;
