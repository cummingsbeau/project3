import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../style/style.css';
//import 'mdbreact/dist/css/mdb.css';
//import { MDBIcon } from "mdbreact";
//import "typeface-roboto";
import 'bootstrap/dist/css/bootstrap.css';






function Nav() {
    return (
        <div>
            <div class="jumbotron jumbotron-dark" style={{backgroundColor:"#16276f" , opacity: ".80"}}>
                <div class="container">
                    <h1 class="display-4" style={{opacity : "3", fontFamily:'Bungee Shade, cursive', color:"white", fontSize: "80px", opacity : "2" }}>Relevant</h1>
                    <div class="rect1"></div>
   
                    <p class="lead" style={{fontFamily:'Bungee Shade, cursive', color:"white", fontSize: "55px", opacity : "2"}}>Find out whats Relevant to you!</p >
                </div>
            </div>
            <nav class="navbar navbar-dark btn btn-dark" style={{fontFamily:'Bungee Shade, cursive',color:"white",  fontSize: "25px", backgroundColor:"#16276f" , opacity: ".80"}}>
                <ul class="nav">
                    <li class="nav-item" >
                    <Link activeStyle={{ color: 'white' }}  
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