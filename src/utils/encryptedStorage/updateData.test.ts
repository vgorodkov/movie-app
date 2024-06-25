import EncryptedStorage from 'react-native-encrypted-storage';

import {updateData} from './updateData';

jest.mock('react-native-encrypted-storage', () => ({
  setItem: jest.fn(),
}));

describe('updateData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should save the data', async () => {
    const key = 'key';
    const data = {foo: 'bar'};

    await updateData(key, data);

    expect(EncryptedStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(data),
    );
  });
});
