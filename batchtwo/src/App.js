import { ComponentOne } from "./Components/ComponentOne";
import {ComponentTwo} from "./Components/ComponentTwo";
import { ComponentThree } from "./Components/ComponentThree";
import { ComponentFour } from "./Components/ComponentFour";
import { ComponentFive } from "./Components/ComponentFive";
import { ComponentSix} from "./Components/ComponentSix";
import { ComponentSeven } from "./Components/ComponentSeven";
import { ComponentEight} from "./Components/ComponentEight";
import { ComponentNine } from "./Components/ComponentNine";
import { ComponentTen } from "./Components/ComponentTen";
import { Reducer } from "./Components/MappingPratice/Reducer";
import { MyCard } from "./Components/Card/MyCard";
import { MyForm } from "./Components/Form/MyForm";
import './App.css';

function App() {
  return (
    <div>
      <h1>This is a Component</h1>
    <ComponentOne/>
    <ComponentTwo/>
    <ComponentThree/>
    <ComponentFour/>
    <ComponentFive/>
    <ComponentSix/>
    <ComponentSeven/>
    <ComponentEight/>
    <ComponentNine/>
    <ComponentTen/>
    <MyForm/>
    <MyCard/>
    <Reducer/>
    
    </div>
  );
}

export default App;
