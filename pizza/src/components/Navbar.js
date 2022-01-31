import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
//import * as FaIcons from "react-icons/fa";
import '../Style/pizza.css';

function Navbar() {
    
  return( 
    <div className="Conatainer-fluid topbar  bg-dark p-3 mt-2 ">
    <div className="row ">
        <div className="col-md-4 " >
            <div className="Leftside">
            <img src="Pizza Images/pizzaLogo.png "alt=""/>
            </div>
        </div>
       <div className="col-md-8">
       <nav className="navbar navbar-light bg-info">
            <div className="container-fluid ">
                    <Link to="/" className=" navbar-brand "> Home</Link>
                    <Link to="/about"className="navbar-brand "> About</Link>
                    <Link to="/menu"className=" navbar-brand "> Menu</Link>
                    <Link to="/contact"className=" navbar-brand "> Contact</Link>
                
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-dark" type="submit">Search</button>
                </form>
        {/* <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <h5 class="text-white h4">Collapsed content</h5>
                    <span class="text-muted">Toggleable via the navbar brand.</span>
                </div>
            </div>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>*/}
            </div>
        </nav>
       </div>
    </div>
</div>            
    )
}

export default Navbar;
