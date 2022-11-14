import React, { Component } from 'react';
import { data } from './MenuItems'
import Button from '../Button';
import './Navbar.css'
import { NavLink,Link } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false};
    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }

    render() {
        return (
            <div className="NavbarItems">
                <h1><Link className='navbar-logo' to={"/"}>React<i className='fab fa-react'/></Link></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}/>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {data.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink className={item.cName} to={item.url} onClick={this.handleClick}>
                                    {item.title}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
                <Link to={"/sign-up"}><Button>Sign Up</Button></Link>
            </div>
        );
    }
}

export default Navbar;