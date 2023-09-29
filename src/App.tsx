import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import Layout from './Layout'
import LandingMessage from './components/LandingMessage';
import Experience from './components/Experience';
import JasonImage from './components/JasonImage';

function App() {
  return(
      <Layout>
        <Routes>
          <Route path="/experience" Component={Experience} />
        </Routes>
        <div className="horizontal-layout">
            <div className="left-half">
              <div className="intro-text">
                <LandingMessage/>
              </div>
            </div>
            <div className="right-half">
              <div className="jason-image">
                <JasonImage />
              </div>
            </div>
        </div>
        <div className="experience">
            <Experience/>
        </div>
      </Layout>
  )
}

export default App
