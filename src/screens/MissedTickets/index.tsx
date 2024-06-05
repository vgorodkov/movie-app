import React from 'react';

import {BookedTicketsList} from '@/components/BookedTicketsList';
import {FullscreenContainer} from '@/styled/FlexContainer';

export const MissedTicketsScreen = () => {
  return (
    <FullscreenContainer>
      <BookedTicketsList ticketsFilterMode="missed" />
    </FullscreenContainer>
  );
};
