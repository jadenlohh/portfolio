import './App.css';
import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='d-flex justify-content-center'>
      <div className='app'>
        <Navbar />
        <Hero />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
