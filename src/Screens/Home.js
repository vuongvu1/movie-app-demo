import React, {useEffect, useState, useCallback} from 'react';
import {ScrollView} from 'react-native';

import {fetchTopRated, fetchTopPopular, fetchUpcoming} from '../apis';
import MovieList from '../components/MovieList';

const HomeScreen = ({navigation}) => {
  const [topRated, setTopRated] = useState([]);
  const [topPopular, setTopPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  const fetchAllData = useCallback(() => {
    fetchTopRated().then(data => setTopRated(data.results));
    fetchTopPopular().then(data => setTopPopular(data.results));
    fetchUpcoming().then(data => setUpcoming(data.results));
  }, []);

  return (
    <ScrollView>
      <MovieList title="Top Rated Movies" movies={topRated} />
      <MovieList title="Popular Movies" movies={topPopular} />
      <MovieList title="Upcoming Movies" movies={upcoming} />
    </ScrollView>
  );
};

export default HomeScreen;
