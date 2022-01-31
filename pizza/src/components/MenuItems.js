import React from 'react';


function MenuItems({imageUrl,name,price}) {
  return( 
  <div className="menuItem">
      <div><img src={imageUrl} alt=""/></div>
      <h1>{name}</h1>
      <p>${price}</p>

  </div>
  );
}

export default MenuItems;