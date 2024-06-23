import React from 'react';

import {BookedTicketsList} from '@/components/BookedTicketsList';
import {TopTabRoutes} from '@/constants/routes';
import {useAppSelector} from '@/store/hooks';
import {missedBookedTicketsSelector} from '@/store/slices/bookedTickets/selectors';
import {FullscreenContainer} from '@/styled/FlexContainer';

export const MissedTicketsScreen = () => {
  const missedBookedTickets = useAppSelector(missedBookedTicketsSelector);
  return (
    <FullscreenContainer testID={TopTabRoutes.MISSED}>
      <BookedTicketsList data={missedBookedTickets} />
    </FullscreenContainer>
  );
};
