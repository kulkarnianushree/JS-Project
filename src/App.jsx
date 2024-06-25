
import React, { useState } from 'react';
import Form from "./components/Form";
import Tshirt from "./components/Tshirt";
import Display from './components/Dispaly';

function App() {
  const ItemList = [
    { id: 1, name: 'Gucci', description: 'Red colour shirt', price: 2500 },
    { id: 2, name: 'Puma', description: 'Blue colour shirt', price: 1500 },
    { id: 3, name: 'Addidas', description: 'Yellow colour shirt', price: 3000 },
    { id: 4, name: 'Cotton-Candy', description: 'Green colour shirt', price: 1000 },
    { id: 5, name: 'Nike', description: 'Pink colour shirt', price: 5000 }
  ];

  const [selectedTshirts, setSelectedTshirts] = useState([]);
  const [clickInfo, setClickInfo] = useState({});
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const ProductButtonHandler = () => {
    setCount(count + 1);
  };

  const CartButtonHandler = () => {
    setShow(true);
  };
  const OkayButtonHandler = () =>{
    console.log('Direct the page to Payment')
    setShow(false)
  }
  const cancelButtonHandler = () =>{
    setShow(false)
  }

  const selectTshirtHandler = (tshirt, size) => {
    const existingIndex = selectedTshirts.findIndex(item => item.id === tshirt.id && item.size === size);
    
    if (existingIndex !== -1) {
      const updatedSelectedTshirts = [...selectedTshirts];
      updatedSelectedTshirts[existingIndex].quantity += 1;
      setSelectedTshirts(updatedSelectedTshirts);
    } else {
      const newTshirt = { ...tshirt, size, quantity: 1 };
      setSelectedTshirts(prevSelectedTshirts => [...prevSelectedTshirts, newTshirt]);
    }
    
    // Update clickInfo
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
      <Form selectedTshirt={selectedTshirts[selectedTshirts.length - 1]} clickInfo={clickInfo} onChoose={ProductButtonHandler} />
      <Tshirt list={ItemList} onSelectTshirt={selectTshirtHandler} />
      {show && <Display data={selectedTshirts} onDone={OkayButtonHandler} onCancel={cancelButtonHandler} />}
    </React.Fragment>
  );
}

export default App;
