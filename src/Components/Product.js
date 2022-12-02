import React, { useState } from "react";

const Product = ({value,cart,setCart}) => {
  const imgsrc = value.pic;
  const name = value.name;
  const price =value.price;

  const [show, setShow] = useState(true);

    
    function IncreaseCart() {
        return setCart(cart + 1);
    }
    function DecreaseCart() {
        return setCart(cart - 1);
    }

  return (
    <div className="card">
      <img src={imgsrc} alt="name" />
      <h2>{name}</h2>
      <p>
        <b>{price}</b>
      </p>
      <button className="btn btn-primary" onClick={() => {
                            setShow(!show);
                            show ? IncreaseCart() : DecreaseCart()
                        }}>{show ? "Add to Cart" : "Remove"}</button>
    </div>
  );
};

export default Product;