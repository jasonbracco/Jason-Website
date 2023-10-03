import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Experience from './components/Experience';
import pictureJason from './Photos/pictureJason.jpg'; 

function App() {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { 
        setIsSticky(true);
      }
      else { 
        setIsSticky(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <Router>
      <div>
        <div className="navbar">
          <NavBar isSticky={isSticky}/>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="image-container">
                <img className="image" src={pictureJason} alt="Jason" />
                <div className="text-overlay">
                  <h2>Hi! I'm Jason</h2>
                  <h2>A Software Engineer</h2> 
                  <h2>Based in New York City</h2>
                </div>
              </div>
            }
          />
          <Route 
            path="/experience" 
            element={
              <div className="experience-container">
                <Experience />
              </div>}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
