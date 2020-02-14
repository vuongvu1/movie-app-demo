import React, {useState, useCallback, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import SearchBar from '../components/SearchBar';
import MovieItem from '../components/MovieItem';
import {searchMovie} from '../apis';
import {debounce} from '../utils';

const SearchScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchWithDebounce(searchText);
  }, [searchText, searchWithDebounce]);

  const searchWithDebounce = useCallback(
    debounce(query => {
      if (query) {
        searchMovie(query).then(data => setMovies(data.results));
      } else {
        setMovies([]);
      }
    }, 300),
    [],
  );

  const goToDetail = id => {
    navigation.navigate('Detail', {id});
  };

  return (
    <View style={styles.container}>
      <SearchBar text={searchText} setText={setSearchText} />

      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MovieItem data={item} onPressItem={() => goToDetail(item.id)} />
        )}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});

export default SearchScreen;
