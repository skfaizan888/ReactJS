// import { Home } from "./Components/Home";
// import { Nav } from "./Components/Nav";
// import { Footer } from "./Components/Home/Footer";
// import { Navi } from "./Components/Navigation/Navi";
import { Service } from "./Components/Pages/Service";
import { Contact } from "./Components/Pages/Contact";
import { About } from "./Components/Pages/About";
import { HomeFirst } from "./Components/HomeFirst/HomeFirst";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { Navi } from "./Components/Navigation/Navi";


const App = () => {
  return (
    <div>
      
              {/* <Nav /> */}
              {/*  <Home />
               <Footer /> */}
        <Router>
        <Navi />
        <Switch>
         <Route path="/Service"><Service/></Route>
         <Route path="/Contact"><Contact/></Route>
         <Route path="/About"><About /></Route>
         <Route path="/"><HomeFirst/></Route>
         
       </Switch>
        </Router>
    </div>
  )
}

          export default App;
