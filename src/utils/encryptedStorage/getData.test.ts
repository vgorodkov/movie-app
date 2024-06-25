import EncryptedStorage from 'react-native-encrypted-storage';

import {getData} from './getData';

jest.mock('react-native-encrypted-storage', () => ({
  getItem: jest.fn(),
}));

describe('getData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get and parse the data when data is found', async () => {
    const mockData = {foo: 'bar'};
    (EncryptedStorage.getItem as jest.Mock).mockResolvedValue(
      JSON.stringify(mockData),
    );

    const result = await getData('key');
    expect(result).toEqual(mockData);
  });

  it('should return undefined when no data is found', async () => {
    (EncryptedStorage.getItem as jest.Mock).mockResolvedValue(null);

    const result = await getData('key');
    expect(result).toBeUndefined();
  });

  it('should throw an error if the data cannot be parsed', async () => {
    (EncryptedStorage.getItem as jest.Mock).mockResolvedValue('invalid-json');

    await expect(getData('key')).rejects.toThrow(SyntaxError);
  });
});
