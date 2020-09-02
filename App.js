import React from 'react';
import Navigator from './navigation/Navigator';
import {AuthProvider} from './contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
  );
};

export default App;
