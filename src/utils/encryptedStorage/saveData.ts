import EncryptedStorage from 'react-native-encrypted-storage';

export const saveData = async <T>(key: string, data: T) => {
  const existingData = await EncryptedStorage.getItem(key);
  if (existingData) {
    const updatedData = [...JSON.parse(existingData), data];
    await EncryptedStorage.setItem(key, JSON.stringify(updatedData));
    return;
  }

  await EncryptedStorage.setItem(key, JSON.stringify(data));
};
