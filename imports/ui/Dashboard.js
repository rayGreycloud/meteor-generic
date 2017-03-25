import React from 'react';

import PrivateHeader from './PrivateHeader';

const Link = () => {
  return (
    <div>
      <PrivateHeader title="Dashboard" />
      <div className="page-content">
        <p>Dashboard content goes here</p>
      </div>
    </div>
  );
};

export default Dashboard;
