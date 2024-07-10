import React from 'react';
import Routing from './router/Routing.tsx';

const App: React.FC = () => {
  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };

  return <Routing data={isAuthenticated()} />
};

export default App;
