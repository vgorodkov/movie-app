import React from 'react';

import {BookedTicketsList} from '@/components/BookedTicketsList';
import {FullscreenContainer} from '@/styled/FlexContainer';

export const PastTicketsScreen = () => {
  return (
    <FullscreenContainer>
      <BookedTicketsList ticketsFilterMode="past" />
    </FullscreenContainer>
  );
};
