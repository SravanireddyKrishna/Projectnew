import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Link} from 'react-router-dom';
//import * as FaIcons from "react-icons/fa";
import '../Style/Menu.css';
import {MenuList} from '../Pages/MenuList';
//import MenuItems from '../Pages/MenuItems';
import MenuItem from './MenuItems';

function Menu() {
  return( 
        <div>
              <div className="Container">
                <div className="row menu">
                  <div className="col-md-12">
                    <h1 className="text-center m-4 text-danger menuTitle">Our Services</h1>
                    <div className="menuList">
                      {MenuList.map((menuItem,key)=>{
                        return(
                          
                            <MenuItem 
                            
                            key={key}
                            imageUrl={menuItem.imageUrl}
                            name={menuItem.name}
                            price={menuItem.price}
                            
                            
                            />
                        );
                      })}
                      </div>
                  </div>
                </div>
              </div>
        </div>

// Ctrl +K
//Ctrl + U 


  );
}

export default Menu;
