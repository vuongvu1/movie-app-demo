import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';

import {fetchMovie} from '../apis';
import {getImageUrl} from '../utils';
import {imageSizes} from '../constants';

const DetailScreen = ({route: {params}}) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovie(params.id).then(data => setMovie(data));
  }, [params.id]);

  if (!movie) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.wall}
        source={{
          uri: getImageUrl({
            fileName: movie.backdrop_path,
            size: imageSizes.DETAIL,
          }),
        }}
      />
      <View style={styles.detail}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.content}>{movie.overview}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  wall: {
    width: '100%',
    height: 250,
  },
  detail: {
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  title: {
    fontSize: 20,
  },
  content: {
    lineHeight: 22,
  },
});

export default DetailScreen;
