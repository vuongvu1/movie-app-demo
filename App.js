import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/Screens/Home';
import SearchScreen from './src/Screens/Search';
import DetailScreen from './src/Screens/Detail';

const {Navigator, Screen} = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Search" component={SearchScreen} />
        <Screen name="Detail" component={DetailScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
