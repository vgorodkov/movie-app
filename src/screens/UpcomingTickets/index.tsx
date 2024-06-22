import React from 'react';

import {BookedTicketsList} from '@/components/BookedTicketsList';
import {TopTabRoutes} from '@/constants/routes';
import {useAppSelector} from '@/store/hooks';
import {upcomingBookedTicketsSelector} from '@/store/slices/bookedTickets/selectors';
import {FullscreenContainer} from '@/styled/FlexContainer';

export const UpcomingTicketsScreen = () => {
  const upcomingBookedTickets = useAppSelector(upcomingBookedTicketsSelector);

  return (
    <FullscreenContainer testID={TopTabRoutes.UPCOMING}>
      <BookedTicketsList data={upcomingBookedTickets} />
    </FullscreenContainer>
  );
};
