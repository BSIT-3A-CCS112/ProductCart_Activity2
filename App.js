// App.js

import React, { useState } from 'react';
import HomePage from './HomePage';
import ProductPage from './Productpage';

function App() {
  const [showProductPage, setShowProductPage] = useState(false);

  const handleViewProducts = () => {
    setShowProductPage(true);
  };

  return (
    <div>
      {showProductPage ? (
        <ProductPage />
      ) : (
        <HomePage onViewProducts={handleViewProducts} />
      )}
    </div>
  );
}

export default App;