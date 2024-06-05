import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';

import {BookingTicket} from '@/types/movies';
import {saveEncryptedData} from '@/utils/encryptedStorage';

export const useBookedTickets = () => {
  const [data, setData] = useState<BookingTicket[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getEncryptedData = useCallback(async () => {
    try {
      const encryptedData = await EncryptedStorage.getItem('booking');
      if (encryptedData) {
        const parsed = JSON.parse(encryptedData);
        setData(parsed);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const cancelTicket = async (ticketId: string) => {
    if (data) {
      const updatedData = data?.filter(ticket => ticket.ticketId !== ticketId);
      setData(updatedData);
      await saveEncryptedData('booking', data);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getEncryptedData();
    }, [getEncryptedData]),
  );

  return {data, cancelTicket, error, isLoading};
};
