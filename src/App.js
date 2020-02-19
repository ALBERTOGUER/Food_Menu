import React, { Component } from "react";
import ProductsData from "./Products";
import ProductCard from "./components/ProductCard";
import ShoppingCart from "./components/ShoppingCart";

import "./App.css";

class App extends Component {
  state = {
    products: ProductsData,
    array1: [1, 2, 3]
  };

  render() {
    let contador = 0;
    let suma = 0;
    let content;
    const Add = () => {
      contador++;
      console.log(contador);
    };

    const cards = this.state.products.map((product, idx) => (
      <ProductCard info={product} key={idx} metodo={Add} />
    ));
    return (
      <div className="row">
        <div className="App card-columns container mt-5 col-6">{cards}</div>
        <div className=" container mt-5 col-4">
          <h1>Carrito</h1>
          <div>
            <ShoppingCart data1={contador} content={content} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
