import './App.css';
import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Experience from './components/experience/Experience';

function App() {
  return (
    <div className='d-flex justify-content-center'>
      <div className='app'>
        <Navbar />
        <Hero />
        <AboutMe />
        <Experience />
      </div>
    </div>
  );
}

export default App;
