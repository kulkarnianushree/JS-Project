const Form = (props) => {
    const { selectedTshirt, clickInfo } = props;
  
    const getClickInfo = () => {
      if (!selectedTshirt || !clickInfo[selectedTshirt.id]) return '';
      const info = clickInfo[selectedTshirt.id];
      return `Large: ${info.L} times, Medium: ${info.M} times, Small: ${info.S} times`;
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
        <button onclick={props.onChoose}>Add Product</button>
      </form>
    );
  };
  
 