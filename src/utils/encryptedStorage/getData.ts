import EncryptedStorage from 'react-native-encrypted-storage';

export const getData = async (key: string) => {
  const encryptedData = await EncryptedStorage.getItem(key);
  if (encryptedData) {
    return JSON.parse(encryptedData);
  }
};
