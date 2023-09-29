import { ReactNode } from 'react';
import './Styles.css'; // Import your CSS file here
import NavBar from './components/NavBar'

type LayoutProps = {
    children: ReactNode; 
  };

function Layout({children}: LayoutProps) {
  return (
    <div>
        <NavBar />
        <div className="layout">
            {children}
        </div>
    </div>
  );
}

export default Layout;