import './App.css';

import Preloader from './components/Preloader/Preloader';
import Routeing from './components/Routers/Routeing';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/HomeArea/Home';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';

function App() {

  let docTitle = document.title;
  window.addEventListener("blur",()=>{
    document.title="Come Back plz 🙄";
  });
  window.addEventListener("focus",()=>{
    document.title = docTitle;
  });

 
  return (
    <>
    {/* <p class="example">Resize the browser window to see how the background color of this paragraph changes on different screen sizes.</p> */}
      
      <Preloader/>
      <Routeing/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
     
    </>
  );
}

export default App;
