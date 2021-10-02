import { Header } from './Components/Navigation/Header';
import { MainBody } from './Components/Body/MainBody';
import { Footer } from './Components/Footer/Footer';
import './App.css';


function App() {
  return (
   <div style={{textAlign:"center"}}>
    <Header/>
    <MainBody/>
    <Footer/>
   </div>   

  );
}

export default App;
