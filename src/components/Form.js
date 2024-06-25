import React from 'react';
import './Form.css'; // Import the CSS file for styling

const Form = (props) => {
  const { selectedTshirt, clickInfo } = props;
  
  const getClickInfo = () => {
    if (!selectedTshirt || !clickInfo[selectedTshirt.id]) return '';
    const info = clickInfo[selectedTshirt.id];
    return `L: ${info.L}, M: ${info.M}, S: ${info.S}`;
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={selectedTshirt ? selectedTshirt.name : ''}
          readOnly
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={selectedTshirt ? selectedTshirt.description : ''}
          readOnly
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={selectedTshirt ? selectedTshirt.price : ''}
          readOnly
        />
      </div>
      <div>
        <label htmlFor="buttonInfo">Button Click Info:</label>
        <input
          type="text"
          id="buttonInfo"
          value={getClickInfo()}
          readOnly
        />
      </div>
      <button type="button" onClick={props.onChoose}>Add Product</button>
    </form>
  );
};

export default Form;
