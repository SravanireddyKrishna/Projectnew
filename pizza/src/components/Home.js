import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
//import * as FaIcons from "react-icons/fa";
import '../Style/Home.css';

function Home() {
  return (
        <div >
         
          <div className="Container-fluid mt-4 home">
          <div className="row">
            <figure className="position-relative home">
              <img src="Pizza Images/pizza.jpeg" alt="pizza" className="img-fluid"/>          
                  <figcaption>
                      <div className ="col-md-12 text-danger fst-italic" >     
                          <h1>Srav's Pizzeria</h1>
                          <p> PIZZA TO FIT ANY TASTE</p>
                          <Link to="/menu">
                              <button className="btn btn-outline-dark  bg-info  fw-bold"> ORDER NOW </button>
                          </Link>
                      </div>
                  </figcaption> 
              </figure>
            </div>
         
          </div>
        </div>
  )
}

export default Home;
