import React from 'react';

const PriceCart = ({ title, price, features }) => {
  return (
    <div className="card">
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">{title}</h5>
        <h1 className="card-subtitle mb-2 text-muted">{price}</h1>
        <hr className="w-100 border-primary" />
        <ul className="list-group list-group-flush">
          {features.map((feature, index) => (
            <li key={index} className="list-group-item">
              {feature}
            </li>
          ))}
        </ul>
        <button className="btn btn-primary mt-3 py-3 btn-lg">Button</button>
      </div>
    </div>
  );
};

export default PriceCart;
