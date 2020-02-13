import React, {useState} from 'react';
// import {API_KEY} from 'react-native-dotenv';
import {View, Text, StyleSheet} from 'react-native';

import FBLoginButton from '../components/FBLoginButton';

const LoginScreen = ({navigation}) => {
  const [userId, setUserId] = useState('');

  const handleLoggedIn = data => setUserId(data.userID);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {userId ? `User ID: ${userId}` : 'Please login'}
      </Text>
      <FBLoginButton onLoginFinished={handleLoggedIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 48,
  },
});

export default LoginScreen;
