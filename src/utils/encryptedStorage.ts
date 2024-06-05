import EncryptedStorage from 'react-native-encrypted-storage';

export const getEncryptedData = async <T>(key: string): Promise<T> => {
  const bookingData = await EncryptedStorage.getItem(key);
  return bookingData ? await JSON.parse(bookingData) : [];
};

export const saveEncryptedData = async <T>(key: string, data: T) => {
  if (typeof data === 'string') {
    await EncryptedStorage.setItem(key, data);
    return;
  }
  await EncryptedStorage.setItem(key, JSON.stringify(data));
};
