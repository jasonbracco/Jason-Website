import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

    return(
            <div>
                <nav className={`navber-sticky`} style={{ position: 'fixed' }}>
                    <div>
                        <div className="navbar-collapse" id="navbarNav">
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