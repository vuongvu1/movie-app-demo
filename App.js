import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-ionicons';

import LoginScreen from './src/screens/Login';
import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import DetailScreen from './src/screens/Detail';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Detail" component={DetailScreen} />
  </Stack.Navigator>
);

const SearchStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="Detail" component={DetailScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return <Ionicons name="home" />;
            } else if (route.name === 'Search') {
              return <Ionicons name="search" />;
            }
            return <Ionicons name="logo-facebook" />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
