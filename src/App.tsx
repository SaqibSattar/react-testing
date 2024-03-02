import { Application } from "./components/application/Application";
import './App.css'
import { Skills } from "./components/skills/Skills";
import { Counter } from "./components/counter/Counter";
import { AppProviders } from "./providers/AppProviders";
import { MuiMode } from "./components/mui/MuiMode";

function App() {

  return (
    <AppProviders>
      <div className="App">
        <Application />
        <Skills skills={["HTML", "CSS"]} />
        <Counter />
        <MuiMode />
      </div>
    </AppProviders>
  )
}

export default App
