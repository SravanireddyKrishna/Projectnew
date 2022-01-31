import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Link} from 'react-router-dom';
//import * as FaIcons from "react-icons/fa";
import '../Style/Menu.css';
import {MenuList} from '../Pages/MenuList';
//import MenuItems from '../Pages/MenuItems';
import MenuItems from './MenuItems';

function Menu() {
  return( 
        <div>
              <div className="Container">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="text-center m-4 text-danger">Our Services</h1>
                    <div className="MenuList">
                      {MenuList.map ( ( MenuItem,key )  => 

                      {
                       
debugger
                        return (
                          <MenuItems className="text-dark">
                          key={key} 
                          imageUrl={MenuItem.imageUrl}
                          name={MenuItem.name}
                          price={MenuItem.price}
                          </MenuItems>
                        );                          
                      })}
                      </div>
                  </div>
                </div>
              </div>
        </div>
  );
}

export default Menu;
