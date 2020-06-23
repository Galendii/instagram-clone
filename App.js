import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';

import Routes from './src/routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <Routes />
    </>
  );
};

export default App;
