import React from 'react';

function ContactCard(props) {
    return (

        <div className="card border-info mt-3">
          <img src={props.info.img} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">{props.info.name}</h5>
          <p className="card-text"> Precio : {props.info.price} $</p>
          <p className="card-text"><small className="text-muted">{props.info.description}</small></p>
          <button type="button" name="" id="" class="btn btn-primary btn-lg btn-block" onclick="Add()">Agregar al carrito</button>
          </div>
         </div>
      
         
    );
  }
  
  export default ContactCard;