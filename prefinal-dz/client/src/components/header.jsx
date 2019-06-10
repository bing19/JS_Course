import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ marginBottom: '30px' }}>
                <Link className="navbar-brand" to="/">Node project</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/cp/companies">Companies</Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">LogIn</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/logout">LogOut</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}