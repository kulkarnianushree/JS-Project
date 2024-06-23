import { useState } from "react";
import TshirtData from "./TshirtData";

const Tshirt = (props) => {
  const initialTshirtState = props.list.map(item => ({
    ...item,
    Lquantity: 100,
    Mquantity: 150,
    Squantity: 200
  }));

  const [tshirts, setTshirts] = useState(initialTshirtState);

  const handleButtonClick = (id, size) => {
    setTshirts(tshirts.map(tshirt => {
      if (tshirt.id === id) {
        switch (size) {
          case 'L':
            return { ...tshirt, Lquantity: tshirt.Lquantity - 1 };
          case 'M':
            return { ...tshirt, Mquantity: tshirt.Mquantity - 1 };
          case 'S':
            return { ...tshirt, Squantity: tshirt.Squantity - 1 };
          default:
            return tshirt;
        }
      }
      return tshirt;
    }));
    const selectedTshirt = tshirts.find(tshirt => tshirt.id === id);
    props.onSelectTshirt(selectedTshirt, size);
  };

  return (
    <div>
      <ul>
        {tshirts.map(item => (
          <div key={item.id}>
            <li>
              <TshirtData
                name={item.name}
                description={item.description}
                price={item.price}
              />
            </li>
            <div>
              <button onClick={() => handleButtonClick(item.id, 'L')}>Large {item.Lquantity}</button>
              <button onClick={() => handleButtonClick(item.id, 'M')}>Medium {item.Mquantity}</button>
              <button onClick={() => handleButtonClick(item.id, 'S')}>Small {item.Squantity}</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Tshirt;
