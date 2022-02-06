import React from 'react';
import '../Style/Menu.css';


function MenuItem({imageUrl,name,price}) {
  return( 
    <div className="Container">
        <div className="row">
          <div className="col-md-12">
            <div className="menuItem" >
            <div><img src={imageUrl} alt=""/></div>
            <h1>{name}</h1>
            <p>$ {price}</p>
            </div>
        </div>
      </div>
  </div>
  );
}

export default MenuItem;