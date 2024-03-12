import './styles/app.css';
import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='d-md-flex justify-content-center'>
      <div className='content'>
        <Navbar />
        
        <main>
          <Hero />
          <AboutMe />
          <Experience />
          <Projects />
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default App