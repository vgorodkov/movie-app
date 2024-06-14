import EncryptedStorage from 'react-native-encrypted-storage';

export const updateData = async <T>(key: string, data: T) => {
  await EncryptedStorage.setItem(key, JSON.stringify(data));
};
