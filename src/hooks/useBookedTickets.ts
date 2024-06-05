import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';

import {BookingTicket} from '@/types/movies';
import {saveEncryptedData} from '@/utils/encryptedStorage';

const filterBookedTickets = (
  ticketDate: string,
  mode: 'upcoming' | 'past' | 'missed',
) => {
  const timestamp = new Date(ticketDate).getTime();
  const nowTimestamp = Date.now();
  if (mode === 'upcoming') {
    return timestamp > nowTimestamp;
  }
  if (mode === 'past') {
    return timestamp < nowTimestamp;
  }
  if (mode === 'missed') {
    return timestamp < nowTimestamp;
  }
};

export const useBookedTickets = (
  filterMode: 'past' | 'upcoming' | 'missed',
) => {
  const [data, setData] = useState<BookingTicket[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getEncryptedData = useCallback(async () => {
    try {
      const encryptedData = await EncryptedStorage.getItem('booking');
      if (encryptedData) {
        const parsed: BookingTicket[] = JSON.parse(encryptedData);
        const filtered = parsed.filter(ticket =>
          filterBookedTickets(ticket.date, filterMode),
        );
        setData(filtered);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  }, [filterMode]);

  const cancelTicket = async (ticketId: string) => {
    if (data) {
      const updatedData = data?.filter(ticket => ticket.ticketId !== ticketId);
      setData(updatedData);
      await saveEncryptedData('booking', updatedData);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getEncryptedData();
    }, [getEncryptedData]),
  );

  return {data, cancelTicket, error, isLoading};
};
