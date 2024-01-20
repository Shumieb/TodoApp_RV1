import React from 'react';
import { Link } from "react-router-dom";

import "../Styles/navBarStyles.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary text-muted mb-4 p-2">
            <div className="container-fluid" style={{ width: "80%" }}>
                <Link to="/" className="navbar-brand text-white">Todo App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" className="nav-link text-white" >About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar