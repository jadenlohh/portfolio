import './App.css';
import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Experience from './components/experience/Experience';

function App() {
  return (
    <div className='d-md-flex justify-content-center'>
      <div className='app'>
        <Navbar />
        
        <main>
          <Hero />
          <AboutMe />
          <Experience />
        </main>
      </div>
    </div>
  );
}

export default App;
