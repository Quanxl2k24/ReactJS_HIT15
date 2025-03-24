import React from "react";
import './Body.css'
import { useState } from "react";
function Body({products}){
    const [counter, setcounter] = useState(0)
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
          const existingProduct = prevCart.find((item) => item.name === product.name);
    
          if (existingProduct) {

            return prevCart.map((item) =>
              item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {

            return [...prevCart, { ...product, quantity: 1 }];
          }
        });
      
        setcounter(counter+1)
    };
    

    const increaseQuantity = (productName) => {
        setCart(function (prevCart) {
            return prevCart.map(function (item) {
                if (item.name === productName) {
                    return {
                        name: item.name,
                        price: item.price,
                        quantity: item.quantity + 1
                    };
                } else {
                    return item;
                }
            });
        });


            setcounter(counter+1)
    };

    const decreaseQuantity = (productName) => {
        setCart(function (prevCart) {
            return prevCart
                .map(function (item) {
                    if (item.name === productName) {
                        return {
                            name: item.name,
                            price: item.price,
                            quantity: item.quantity - 1
                        };
                    } else {
                        return item;
                    }
                })
                .filter(function (item) {
                    return item.quantity > 0; 
                });
        });
        setcounter(counter-1)
    }
    return (
        <div className="Body">
            <div className="cart">
                <h1>Giỏ hàng ({counter } sản phẩm) </h1>
            </div>

            <div className="box_product">
                <ul>
                    {products.map((product, index)=>(
                        <li className="list-product" key = {index}>
                            <p>{product.name} - {product.price}VND</p>
                            <button onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="listcart">
                <ul>
                    {cart.map((product, index)=>(
                        <li className="list-cart">
                            <p>{product.name} - {product.quantity}</p> 
                            <div className="button-addandremove">
                                <button onClick={() =>increaseQuantity(product.name)}>+</button>
                                <button onClick={()=>decreaseQuantity(product.name)}>-</button>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </div>


    );
}

export default Body