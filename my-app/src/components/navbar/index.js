import React from "react";
import 'bootstrap/dist/css/bootstrap.css';



function Nav() {
    return (
        <div>
            <div class="jumbotron jumbotron-dark" style={{backgroundColor:"#343a40"}}>
                <div class="container">
                    <h1 class="display-4" style={{color:"white"}}>Relevant</h1>
                    <p class="lead" style={{color:"white"}}>Find out whats Relevant to you!</p>
                </div>
            </div>
            <nav class="navbar navbar-dark btn btn-dark">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="#" style={{color: 'white'}}>Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style={{color: 'white'}}>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"style={{color: 'white'}}>Saved</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;