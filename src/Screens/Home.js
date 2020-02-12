import React from 'react';
import {Text, View, Button} from 'react-native';
import {API_KEY} from 'react-native-dotenv';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Hello Home!!! {API_KEY}</Text>
      <Button
        title="Go to Search"
        onPress={() => navigation.navigate('Search')}
      />
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

export default HomeScreen;
