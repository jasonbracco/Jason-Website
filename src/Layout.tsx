import { ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom' 

import './Styles.css'; // Import your CSS file here
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/NavBar'

type LayoutProps = {
    children: ReactNode; 
  };

function Layout({children}: LayoutProps) {
  return (
    <div>
        <Router>
            <NavBar />
            <div className="layout">
                {children}
            </div>
        </Router>
    </div>
  );
}

export default Layout;