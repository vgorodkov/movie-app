import EncryptedStorage from 'react-native-encrypted-storage';

import {saveData} from './saveData';

jest.mock('react-native-encrypted-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

describe('saveData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should save new data when no existing data is found', async () => {
    (EncryptedStorage.getItem as jest.Mock).mockResolvedValue(null);

    const data = {foo: 'bar'};
    await saveData('key', data);

    expect(EncryptedStorage.setItem).toHaveBeenCalledWith(
      'key',
      JSON.stringify(data),
    );
  });

  it('should update existing data by adding new data', async () => {
    const existingData = [{foo: 'bar'}];
    (EncryptedStorage.getItem as jest.Mock).mockResolvedValue(
      JSON.stringify(existingData),
    );

    const newData = {foo1: 'bar1'};
    await saveData('key', newData);

    const expectedData = [...existingData, newData];
    expect(EncryptedStorage.setItem).toHaveBeenCalledWith(
      'key',
      JSON.stringify(expectedData),
    );
  });
});
