import { Application } from "./components/application/Application";
import './App.css'
import { Skills } from "./components/skills/Skills";
import { Counter } from "./components/counter/Counter";

function App() {

  return (
    <div>
      <Application />
      <Skills skills={["HTML", "CSS"]} />
      <Counter />
    </div>
  )
}

export default App
