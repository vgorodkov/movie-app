import React from 'react';

import {Typography, TypographyVariant} from '@/components/UI';
import {BookingTicket} from '@/types/movies';

interface BookedTicketInformationProps
  extends Pick<BookingTicket, 'date' | 'ticketId' | 'movieName'> {}

export const BookedTicketInformation = ({
  movieName,
  date,
  ticketId,
}: BookedTicketInformationProps) => {
  return (
    <>
      <Typography
        alightSelf="flex-start"
        variant={TypographyVariant.SUBTITLE_MEDIUM}>
        {movieName}
      </Typography>
      <Typography
        alightSelf="flex-start"
        variant={TypographyVariant.LABEL_MEDIUM}>
        Date: {date}
      </Typography>
      <Typography
        alightSelf="flex-start"
        variant={TypographyVariant.LABEL_SMALL}>
        {ticketId}
      </Typography>
    </>
  );
};
