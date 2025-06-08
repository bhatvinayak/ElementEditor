import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView>
      <Text style={{fontSize: 16, textAlign: 'center', padding: 16}}>
        Welcome to <Text style={{fontWeight: 'bold'}}>Element Editor</Text> – a
        live React Native component editor. Choose a component like Button,
        Text, or Modal and visually edit its properties in real time. Instantly
        preview your changes and copy the JSX code with one tap!
      </Text>
    </SafeAreaView>
  );
};

export default Home;
