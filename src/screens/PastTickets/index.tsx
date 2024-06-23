import React from 'react';

import {BookedTicketsList} from '@/components/BookedTicketsList';
import {TopTabRoutes} from '@/constants/routes';
import {useAppSelector} from '@/store/hooks';
import {pastBookedTicketsSelector} from '@/store/slices/bookedTickets/selectors';
import {FullscreenContainer} from '@/styled/FlexContainer';

export const PastTicketsScreen = () => {
  const pastBookedTickets = useAppSelector(pastBookedTicketsSelector);
  return (
    <FullscreenContainer testID={TopTabRoutes.PAST}>
      <BookedTicketsList data={pastBookedTickets} />
    </FullscreenContainer>
  );
};
