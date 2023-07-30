import React from 'react';
import './App.css';
import PriceCart from './PriceCart';

const App = () => {
  const plans = [
    {
      title: 'FREE',
      price: '$0/month',
      features: [
        'Single User',
        '5GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
        'Monthly Status Reports',
      ],
    },
    {
      title: 'PLUS',
      price: '$9/month',
      features: [
        '5 Users',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
        'Monthly Status Reports',
      ],
    },
    {
      title: 'PRO',
      price: '$49/month',
      features: [
        'Unlimited Users',
        '150GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomains',
        'Monthly Status Reports',
      ],
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-4 mb-4">
          <PriceCart {...plans[0]} />
        </div>
        <div className="col-lg-4 mb-4">
          <PriceCart {...plans[1]} />
        </div>
        <div className="col-lg-4 mb-4">
          <PriceCart {...plans[2]} />
        </div>
      </div>
    </div>
  );
};

export default App;
