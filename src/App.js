import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='d-flex justify-content-center'>
      <div className='app'>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
