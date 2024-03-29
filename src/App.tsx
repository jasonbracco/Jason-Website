import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Experience from './components/Experience';
import pictureJason from './Photos/pictureJason.jpg'; 
import Projects from './components/Projects';

function App() {

  return(
    <Router>
      <div>
        <div className="navbar">
          <NavBar/>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="image-container">
                <img className="image" src={pictureJason} alt="Jason" />
                <div className="text-overlay">
                  <h4>Hey, I'm </h4>
                  <h2>Jason Bracco</h2>
                </div>
              </div>
            }
          />
          <Route 
            path="/experience" 
            element={
              <div >
                <img className="image" src={pictureJason} />
                <div className="experience-container">
                  <Experience />
                </div>
            </div>
            }
          />
          <Route 
            path="/projects" 
            element={
              <div >
                <img className="image" src={pictureJason} />
                <div className="experience-container">
                  <Projects />
                </div>
            </div>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
