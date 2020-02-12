import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './src/screens/Login';
import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import DetailScreen from './src/screens/Detail';

const {Navigator, Screen} = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Login" component={LoginScreen} />
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Search" component={SearchScreen} />
        <Screen name="Detail" component={DetailScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
