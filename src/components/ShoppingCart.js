import React from "react";

const ShoppingCart = props => {
  let content = <p>No hay productos seleccionados</p>;

  if (props.data1 > 0) {
    for (let i = 0; i < props.data1; i++) {}
    content = (
      <div>
        <p>Hay {props.data1} productos agregados al carrito</p>
        {/* <p>El total es {suma}</p> */}
      </div>
    );
  } else {
    content = <p>No hay productos seleccionados</p>;
  }

  return content;
};

export default ShoppingCart;
