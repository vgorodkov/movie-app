import React, {useMemo} from 'react';
import {useTranslation} from 'react-i18next';

import {Typography, TypographyVariant} from '@/components/UI';
import {TOTAL_SEATS} from '@/constants/cinema';
import {spacing} from '@/constants/spacing';
import {useAppSelector} from '@/store/hooks';
import {reservedSeatsSelector} from '@/store/slices/ticketBooking/selectors';
import {FlexContainer} from '@/styled/FlexContainer';
import {generateCinemaSeats} from '@/utils/generateCinemaSeats';

import {seatLegend} from './constants';
import {SeatLegend} from './SeatLegend';
import {SeatsSide} from './SeatsSide';
import {LeftSeats, RightSeats} from './styles';

export const BookingSeatPicker = () => {
  const {t} = useTranslation('home');
  const reservedSeats = useAppSelector(reservedSeatsSelector);
  const seats = useMemo(() => {
    return generateCinemaSeats(TOTAL_SEATS, reservedSeats);
  }, [reservedSeats]);

  const leftSideSeats = useMemo(() => seats.slice(0, TOTAL_SEATS / 2), [seats]);
  const rightSideSeats = useMemo(
    () => seats.slice(TOTAL_SEATS / 2, TOTAL_SEATS),
    [seats],
  );

  return (
    <FlexContainer flex={1} gap={spacing.sm}>
      <Typography variant={TypographyVariant.SUBTITLE_SMALL}>
        {t('Screen')}
      </Typography>
      <FlexContainer flexFlow="row nowrap" justifyContent="space-between">
        <LeftSeats>
          <SeatsSide seats={leftSideSeats} />
        </LeftSeats>
        <RightSeats>
          <SeatsSide seats={rightSideSeats} />
        </RightSeats>
      </FlexContainer>
      <FlexContainer flexFlow="row nowrap" justifyContent="space-around">
        {seatLegend.map(seatLegendItem => {
          const {type} = seatLegendItem;
          return <SeatLegend key={type} type={type} />;
        })}
      </FlexContainer>
    </FlexContainer>
  );
};
