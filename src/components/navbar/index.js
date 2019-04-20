import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../style/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { withStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import grey from '@material-ui/core/colors/grey';






function Nav() {
    return (
        <div>
            <div class="jumbotron jumbotron-dark" style={{backgroundColor:"#343a40"}}>
                <div class="container">
                    <h1 class="display-4" style={{color:"white"}}>Relevant</h1>
                    <div class="rect1"></div>
   
                    <p class="lead" style={{color:"white"}}>Find out whats Relevant to you!</p>
                </div>
            </div>
            <nav class="navbar navbar-dark btn btn-dark">
                <ul class="nav">
                    <li class="nav-item">
                    <Link  
                    to="/"   
                    className={
                        window.location.pathname === "/" || window.location.pathname === "/Search"
                        ? "nav-link active"
                  : "nav-link"

                    } 
                    >Search</Link>     
                    </li>



                    <li class="nav-item">
                    <Link  
                    to="/Facebook"   
                    className={
                        window.location.pathname === "/Facebook" || window.location.pathname === "/Facebook"
                        ? "nav-link active"
                  : "nav-link"

                    } 
                    >FaceBook</Link>    
                    </li>
                    <li class="nav-item">

                    <Link  
                    to="/Save"   
                    className={
                        window.location.pathname === "/Save" || window.location.pathname === "/Save"
                        ? "nav-link active"
                  : "nav-link"

                    } 
                    >Saved Recommendations</Link>    

                    </li>
                  
                </ul>
            </nav>
        </div>
    );
}

export default Nav;