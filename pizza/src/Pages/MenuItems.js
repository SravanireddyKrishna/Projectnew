import React from 'react';


function MenuItems1({imageUrl,name,price})
 {
  return( 
  <div className="MenuItem">
      <div><img src={imageUrl} alt=""/></div>
      <h1>{name}</h1>
      <p>${price}</p>

  </div>
  );
}

export default MenuItems1;
