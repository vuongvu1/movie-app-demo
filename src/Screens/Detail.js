import React from 'react';
import {Text, View, Button} from 'react-native';

const DetailScreen = ({navigation}) => {
  return (
    <View>
      <Text>This is Detail page!!!</Text>
      <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default DetailScreen;
