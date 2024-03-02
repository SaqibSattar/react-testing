import { Application } from "./components/application/Application";
import './App.css'
import { Skills } from "./components/skills/Skills";

function App() {

  return (
    <div>
      <Application />
      <Skills skills={["HTML", "CSS"]} />
    </div>
  )
}

export default App
