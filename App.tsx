import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from './src/MyDrawer';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default App;
