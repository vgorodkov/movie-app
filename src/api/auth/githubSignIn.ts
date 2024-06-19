import auth from '@react-native-firebase/auth';
import {authorize} from 'react-native-app-auth';

const config = {
  redirectUrl: 'movieapp://signup',
  clientId: process.env.FIREBASE_CLIENT_ID || '',
  clientSecret: process.env.FIREBASE_CLIENT_SECRET || '',
  scopes: ['identity'],
  additionalHeaders: {Accept: 'application/json'},
  serviceConfiguration: {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
    revocationEndpoint:
      'https://github.com/settings/connections/applications/<client-id>',
  },
};

export const githubSignIn = async () => {
  try {
    const result = await authorize(config);
    const credential = auth.GithubAuthProvider.credential(result.accessToken);
    await auth().signInWithCredential(credential);
  } catch (error) {
    console.error(error);
  }
};
