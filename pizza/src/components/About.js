import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/About.css';

function About() {
  return (
        <div>
         <div className="Container">
           <div className="row about">
           <img src="Pizza Images/multiplePizzas.jpeg" alt="pizza" className="img-fluid"/>
             <div className="col-md-12">
              <div className="paragrap1">
                <h3>History Of Pizza</h3>
                <p>Modern pizza evolved from similar flatbread dishes in Naples, Italy, in the 18th or early 19th century. The word pizza was first documented in 997 AD in Gaeta and successively in different parts of Central and Southern Italy. Pizza was mainly eaten in Italy and by emigrants from there.
                Pizza was first invented in Naples, Italy as a fast, affordable, tasty meal for working-class Neapolitans on the go. While we all know and love these slices of today, pizza actually didn't gain mass appeal until the 1940s, when immigrating Italians brought their classic slices to the United States.</p>
              </div>
              <div className="paragrap1">
                <h3>About Us</h3>
                <p>Modern pizza evolved from similar flatbread dishes in Naples, Italy, in the 18th or early 19th century. The word pizza was first documented in 997 AD in Gaeta and successively in different parts of Central and Southern Italy. Pizza was mainly eaten in Italy and by emigrants from there.
                Pizza was first invented in Naples, Italy as a fast, affordable, tasty meal for working-class Neapolitans on the go. While we all know and love these slices of today, pizza actually didn't gain mass appeal until the 1940s, when immigrating Italians brought their classic slices to the United States.</p>
                <p>Pizza became as popular as it did in part because of the sheer number of Italian immigrants: they made up 4 million of the 20 million immigrants who came to the U.S. between 1880 and 1920. ... Italian immigrants first made pizzas in their homes and would sell them in unlicensed venues before G.An easy group dinner or a tasty midnight snack, pizza is a staple in the U.S. Americans love pizza so much that they eat 100 acres of pizza a day. (If you don’t measure your pizza consumption in acres, that’s about 350 slices of pizza per second!) Did you ever wonder how this Italian flatbread became an American sensation?</p>
              </div>
             </div>
           </div>
         </div>
        </div>
);
}

export default About;
