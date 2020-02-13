import React from 'react';
import {Text, View, Button} from 'react-native';

const SearchScreen = ({navigation}) => {
  return (
    <View>
      <Text>Hello Profile, it's!!!</Text>
      <Button
        title="Go to detail"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

export default SearchScreen;
