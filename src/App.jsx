import React, { useState } from "react";
import Tshirt from "./components/TshirtList";
import Form from "./components/TshirtForm";

function App() {
  const ItemList = [
    { id: 1, name: 'Gucci', description: 'Red colour shirt', price: 2500 },
    { id: 2, name: 'Puma', description: 'Blue colour shirt', price: 1500 },
    { id: 3, name: 'Addidas', description: 'Yellow colour shirt', price: 3000 },
    { id: 4, name: 'Cotton-Candy', description: 'Green colour shirt', price: 1000 },
    { id: 5, name: 'Nike', description: 'Pink colour shirt', price: 5000 }
  ];

  const [selectedTshirt, setSelectedTshirt] = useState(null);
  const [clickInfo, setClickInfo] = useState({});
  const [count, setCount] = useState(0);

  const CartButtonHandler = () => {
    setCount(count + 1);
  };

  const selectTshirtHandler = (tshirt, size) => {
    setSelectedTshirt(tshirt);
    setClickInfo(prevInfo => {
      const newClickInfo = { ...prevInfo };
      if (!newClickInfo[tshirt.id]) {
        newClickInfo[tshirt.id] = { L: 0, M: 0, S: 0 };
      }
      newClickInfo[tshirt.id][size] += 1;
      return newClickInfo;
    });
  };

  return (
    <React.Fragment>
      <div>
        <h1>Big T-shirt Mall</h1>
        <button onClick={CartButtonHandler}>Cart {count}</button>
      </div>
      <Form selectedTshirt={selectedTshirt} clickInfo={clickInfo} />
      <Tshirt list={ItemList} onSelectTshirt={selectTshirtHandler} />
    </React.Fragment>
  );
}

export default App;
