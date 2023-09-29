import { BrowserRouter as Router, Link } from 'react-router-dom';

function NavBar(){

    return(
            <div className="navbar">
                <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                    <div className="container-fluid">
                        <Link className="nav-link" to="/">Home</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/experience">Experience</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.linkedin.com/in/jason-bracco/" className="nav-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://github.com/yourusername" className="nav-link" target="_blank" rel="noopener noreferrer"> GitHub</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
    )
}

export default NavBar