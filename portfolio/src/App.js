import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import Skills from './component/Skill/Skill';
import Work from './component/Work/Work';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
