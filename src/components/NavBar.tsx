import React from 'react';
import { Link } from 'react-router-dom';
import { CiLinkedin } from 'react-icons/ci';
import { BsMedium } from 'react-icons/bs';
import { VscGithub } from 'react-icons/vsc'

function NavBar() {

    return (
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
                                <Link className="nav-link" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://medium.com/@bracco.jason">Blog <BsMedium /></a>
                            </li>
                            <li className="nav-item">
                                <h4><a href="https://www.linkedin.com/in/jason-bracco/" className="nav-link" target="_blank" rel="noopener noreferrer"><CiLinkedin /></a></h4>
                            </li>
                            <li className="nav-item">
                                <h4><a href="https://github.com/yourusername" className="nav-link" target="_blank" rel="noopener noreferrer"> <VscGithub /></a></h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar