import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AccessToken} from 'react-native-fbsdk';

import FBLoginButton from '../components/FBLoginButton';

const LoginScreen = ({navigation}) => {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    AccessToken.getCurrentAccessToken().then(data =>
      data ? setUserId(data.userID) : null,
    );
  }, []);

  const handleLoggedIn = data => setUserId(data.userID);
  const handleLoggedOut = data => setUserId('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {userId ? `User ID: ${userId}` : 'Please login'}
      </Text>
      <FBLoginButton
        onLoginFinished={handleLoggedIn}
        onLogoutFinished={handleLoggedOut}
      />
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
