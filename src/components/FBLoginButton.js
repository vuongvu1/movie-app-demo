import React from 'react';
import {LoginButton, AccessToken} from 'react-native-fbsdk';

const FBLoginButton = ({onLoginFinished, onLogoutFinished}) => {
  return (
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
              onLoginFinished(data);
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
  );
};

export default FBLoginButton;
