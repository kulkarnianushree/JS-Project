import React, { useState } from "react";
import "./Tshirt.css"; // Import the CSS file for styling

const Tshirt = (props) => {
  const { list, onSelectTshirt } = props;
  const [tshirts, setTshirts] = useState(() =>
    list.map((item) => ({
      ...item,
      Lquantity: 100,
      Mquantity: 150,
      Squantity: 200,
    }))
  );


  const handleButtonClick = (id, size) => {
    setTshirts((prevTshirts) =>
      prevTshirts.map((tshirt) => {
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
      })
    );

    const selectedTshirt = tshirts.find((tshirt) => tshirt.id === id);
    onSelectTshirt(selectedTshirt, size);
  };

  return (
    <div className="tshirt-container">
      <ul>
        {tshirts.map((item) => (
          <div className="tshirt-item" key={item.id}>
            <li>
              <div className="tshirt-details">{item.name}</div>
              <div className="tshirt-description">{item.description}</div>
              <div className="tshirt-price">${item.price}</div>
            </li>
            <div className="tshirt-buttons">
              <button
                onClick={() => handleButtonClick(item.id, 'L')}
              >
                Large {item.Lquantity}
              </button>
              <button
                onClick={() => handleButtonClick(item.id, 'M')}
              >
                Medium {item.Mquantity}
              </button>
              <button
                onClick={() => handleButtonClick(item.id, 'S')}
                
              >
                Small {item.Squantity}
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Tshirt;
