import React from 'react';
import {FlatList} from 'react-native';

import {useBookedTickets} from '@/hooks/useBookedTickets';

import {renderTickets} from './renderTickets';
import {styles} from './styles';

export const BookedTicketsList = ({
  ticketsFilterMode,
}: {
  ticketsFilterMode: 'past' | 'upcoming' | 'missed';
}) => {
  const {data, cancelTicket, isLoading} = useBookedTickets(ticketsFilterMode);

  if (isLoading) {
    return null;
  }

  return (
    <FlatList
      contentContainerStyle={styles.bookedTicketsListContentContainer}
      data={data}
      renderItem={renderTickets(cancelTicket)}
    />
  );
};
