import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

type NavBarProps = {
    isSticky: boolean;
  };

function NavBar({ isSticky }: NavBarProps) {

    const navbarClasses = isSticky ? 'navbar-sticky' : 'navbar';

    return(
            <div>
                <nav className={`bg-body-tertiary ${navbarClasses}`} style={{ position: 'fixed' }}>
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/experience">Experience</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Blog - add icon</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.linkedin.com/in/jason-bracco/" className="nav-link" target="_blank" rel="noopener noreferrer">LinkedIn - add icon</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://github.com/yourusername" className="nav-link" target="_blank" rel="noopener noreferrer"> GitHub - add icon</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
    )
}

export default NavBar