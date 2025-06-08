import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './screens/Home';
import MyButton from './screens/MyButton';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="MyButton"
        component={MyButton}
        options={{
          title: 'Button',
        }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
