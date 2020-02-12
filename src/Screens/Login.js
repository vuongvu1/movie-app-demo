import React from 'react';
// import {API_KEY} from 'react-native-dotenv';

import FBLoginButton from '../components/FBLoginButton';

const HomeScreen = ({navigation}) => {
  const goToHomePage = () => navigation.navigate('Home');

  return <FBLoginButton onLoginFinished={goToHomePage} />;
};

export default HomeScreen;
