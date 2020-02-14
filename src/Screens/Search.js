import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import SearchBar from '../components/SearchBar';

const SearchScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <SearchBar text={searchText} setText={setSearchText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});

export default SearchScreen;
