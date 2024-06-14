import React from 'react';
import {FlatList} from 'react-native';

import {renderTickets} from './renderTickets';
import {styles} from './styles';
import {BookedTicketsListProps} from './types';

export const BookedTicketsList = ({data}: BookedTicketsListProps) => {
  return (
    <FlatList
      contentContainerStyle={styles.bookedTicketsListContentContainer}
      data={data}
      renderItem={renderTickets}
    />
  );
};
