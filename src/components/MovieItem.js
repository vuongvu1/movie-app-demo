import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {imageSizes} from '../constants';
import {getImageUrl} from '../utils';

const MovieItem = ({
  data: {id, title, poster_path, release_date, overview},
  onPressItem,
}) => (
  <TouchableOpacity style={styles.container} onPress={onPressItem}>
    <Image
      style={styles.logo}
      source={{
        uri: getImageUrl({
          fileName: poster_path,
          size: imageSizes.SEARCH,
        }),
      }}
    />
    <View style={styles.detail}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description} numberOfLines={4}>
        {overview}
      </Text>
      <Text style={styles.publishDate}>Published: {release_date}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 150,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  logo: {
    marginHorizontal: 5,
    width: 100,
  },
  detail: {
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'space-between',
    padding: 0,
  },
  title: {
    fontSize: 18,
  },
  description: {
    fontSize: 14,
  },
  publishDate: {
    fontSize: 12,
    color: 'grey',
  },
});

export default MovieItem;
