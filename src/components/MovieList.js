import React, {useCallback} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';

import {imageSizes} from '../constants';
import {getImageUrl} from '../utils';

const MovieList = ({title, movies}) => {
  const renderImage = useCallback(
    ({item}) => (
      <Image
        key={item.id}
        style={styles.logo}
        source={{
          uri: getImageUrl({
            fileName: item.poster_path,
            size: imageSizes.LOGO,
          }),
        }}
      />
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <View style={styles.list}>
        <FlatList
          data={movies}
          renderItem={renderImage}
          keyExtractor={item => item.id}
          horizontal
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  logo: {
    width: 100,
    height: 140,
    marginRight: 10,
  },
});

export default MovieList;
