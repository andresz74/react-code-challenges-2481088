import { useState } from "react";

const items = [
  {
    name: "apple",
    price: 0.39,
  },
  {
    name: "banana",
    price: 0.79,
  },
  {
    name: "cherry tomatoes",
    price: 3.99,
  },
];

function ShoppingCart() {
  // const cart = [{ name: "apple", quantity: 3, price: 0.39 }];
  const [cart, setCart] = useState([]);

  const findItemInCart = (item) => {
    return cart.find((i) => item.name === i.name);
  };

  const addCart = (item) => {
    const itemInCart = findItemInCart(item);
    if (itemInCart) {
      itemInCart.quantity++;
      setCart([...cart]);
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  const increase = (item) => {
    const itemInCart = findItemInCart(item);
    itemInCart.quantity++;
    setCart([...cart]);
  };

  // Using 'filter' will create a new array.
  // const decrease = (item) => {
  //   const itemInCart = findItemInCart(item);
  //   if (itemInCart.quantity > 1) {
  //     itemInCart.quantity--;
  //     setCart([...cart]);
  //   } else {
  //     setCart(prevCart => prevCart.filter(i => i.name !== itemInCart.name));
  //   }
  // };

  const decrease = (item) => {
    // get the index of the item in the cart
    const itemIndex = cart.findIndex((i) => i.name === item.name);
    if (itemIndex > -1) {
      const item = cart[itemIndex];
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        cart.splice(itemIndex, 1);
      }
      setCart([...cart]);
    }
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cart">
        <div className="items">
          <h2>Items</h2>
          {items.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => addCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div>
          <h2>Cart</h2>
          {cart.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button onClick={() => decrease(item)}>-</button>
                {item.quantity}
                <button onClick={() => increase(item)}>+</button>
              </p>
              <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="total">
        <h2>
          Total: $
          {cart.reduce((totalCart, item) => totalCart + item.quantity * item.price, 0).toFixed(2)}
        </h2>
      </div>
    </div>
  );
}

export default ShoppingCart;
