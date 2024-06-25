import React from 'react';
import './Display.css';
import ReactDOM from 'react-dom';

const Display = (props) => {
  const BackDrop = () => {
    return <div className="backdrop" onClick={props.onConfirm}></div>;
  };

  const ModalOverlay = () => {
    const totals = {};

    props.data.forEach((item) => {
      const key = `${item.name}-${item.id}`;
      if (!totals[key]) {
        totals[key] = {
          name: item.name,
          id: item.id,
          L: 0,
          M: 0,
          S: 0,
          total: 0,
        };
      }
      totals[key][item.size] += 1;
      totals[key].total += item.price;
    });

    const grandTotal = Object.values(totals).reduce((total, item) => total + item.total, 0);

    return (
      <div className="modal">
        <header>
          <h2>Your Cart</h2>
        </header>
        <div className="modal-content">
          <ul>
            {Object.values(totals).map((item, index) => (
              <li key={index}>
                {item.name} - {item.L}L {item.M}M {item.S}S - {item.total}
              </li>
            ))}
          </ul>
          <div>
            Grand Total: {grandTotal}
          </div>
          <footer>
            <button className="okay-button" onClick={props.onDone}>Okay</button>
            <button className="cancel-button" onClick={props.onCancel}>Cancel</button>
          </footer>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay />, document.getElementById('overlay-root'))}
    </React.Fragment>
  );
};

export default Display;
