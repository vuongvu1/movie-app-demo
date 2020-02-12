import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LoginButton, AccessToken} from 'react-native-fbsdk';

const FBLoginButton = ({onLoginFinished, onLogoutFinished}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Login Screen</Text>
      <LoginButton
        onLoginFinished={(error, result) => {
          if (error) {
            console.log(`login has error: ${result.error}`);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              console.log(`Logged in with user id: ${data.userID}`);
              if (onLoginFinished) {
                onLoginFinished();
              }
            });
          }
        }}
        onLogoutFinished={() => {
          console.log('logout.');
          if (onLogoutFinished) {
            onLogoutFinished();
          }
        }}
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

export default FBLoginButton;
