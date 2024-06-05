import React from 'react';

import {BookedTicketsList} from '@/components/BookedTicketsList';
import {FullscreenContainer} from '@/styled/FlexContainer';

export const UpcomingTicketsScreen = () => {
  return (
    <FullscreenContainer>
      <BookedTicketsList ticketsFilterMode="upcoming" />
    </FullscreenContainer>
  );
};
