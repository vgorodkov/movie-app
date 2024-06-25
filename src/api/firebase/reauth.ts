import {firebase, FirebaseAuthTypes} from '@react-native-firebase/auth';

export const reauth = async (
  user: FirebaseAuthTypes.User,
  currentPassword: string,
) => {
  const providers = user.providerData.map(provider => provider.providerId);
  if (providers.includes(firebase.auth.EmailAuthProvider.PROVIDER_ID)) {
    const credentials = firebase.auth.EmailAuthProvider.credential(
      user.email || '',
      currentPassword,
    );
    await user.reauthenticateWithCredential(credentials);
  } else if (providers.includes(firebase.auth.GoogleAuthProvider.PROVIDER_ID)) {
    await user.reauthenticateWithProvider(firebase.auth.GoogleAuthProvider);
  }
};
