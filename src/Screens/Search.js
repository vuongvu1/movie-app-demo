import React from 'react';
import {Text, View, Button} from 'react-native';

const SearchScreen = ({navigation}) => {
  return (
    <View>
      <Text>Hello Profile, it's!!!</Text>
      <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default SearchScreen;
