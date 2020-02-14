import React from 'react';


function ShoppingCart(props) {
 let content;
 let contador = 0;
 let suma = 0;
 console.log(props.data1);
 

    if(props.data1.length > 0){
     for( let i =0; i < props.data1.length; i++ ){
      contador++;
      suma = suma + props.data1[i];
     }
     content =
     <div >
         <p>Hay {props.data1.length} productos agregados al carrito</p>
    <p>El total es {suma}</p>
     </div> 
    }
    else{
      content=  <p>No hay productos seleccionados</p>
    }
    return content;
  }
  
  export default ShoppingCart;