import React from 'react';

import {BookedTicketsList} from '@/components/BookedTicketsList';
import {useAppSelector} from '@/store/hooks';
import {pastBookedTicketsSelector} from '@/store/slices/bookedTickets/selectors';
import {FullscreenContainer} from '@/styled/FlexContainer';

export const PastTicketsScreen = () => {
  const pastBookedTickets = useAppSelector(pastBookedTicketsSelector);
  return (
    <FullscreenContainer>
      <BookedTicketsList data={pastBookedTickets} />
    </FullscreenContainer>
  );
};
