import React, {useMemo} from 'react';
import {useTheme} from 'styled-components';

import {Typography, TypographyVariant} from '@/components/UI';
import {TOTAL_SEATS} from '@/constants/cinema';
import {spacing} from '@/constants/spacing';
import {useAppSelector} from '@/store/hooks';
import {reservedSeatsSelector} from '@/store/slices/ticketBooking/selectors';
import {FlexContainer} from '@/styled/FlexContainer';
import {generateCinemaSeats} from '@/utils/generateCinemaSeats';

import {EMPTY_SEAT_INDEX} from './constants';
import {Seat} from './Seat';
import {SeatLegend} from './SeatLegend';
import {LeftSeats, RightSeats} from './styles';

export const BookingSeatPicker = () => {
  const theme = useTheme();
  const reservedSeats = useAppSelector(reservedSeatsSelector);
  const seats = useMemo(() => {
    return generateCinemaSeats(TOTAL_SEATS, reservedSeats);
  }, [reservedSeats]);

  const seatLegend = [
    {
      label: 'Avaible',
      borderColor: theme.colors.primaryText,
    },
    {
      label: 'Reserved',
      backgroundColor: theme.colors.border,
      borderColor: theme.colors.primaryText,
    },
    {
      label: 'Selected',
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primaryText,
    },
  ];

  const leftSideSeats = seats.slice(0, TOTAL_SEATS / 2);
  const rightSideSeats = seats.slice(TOTAL_SEATS / 2, TOTAL_SEATS);

  return (
    <FlexContainer flex={1} gap={spacing.sm}>
      <Typography variant={TypographyVariant.SUBTITLE_SMALL}>Screen</Typography>
      <FlexContainer flexFlow="row nowrap" justifyContent="space-between">
        <LeftSeats>
          {leftSideSeats.map((seat, index) => {
            const {id, isReserved} = seat;
            return (
              <Seat
                key={id}
                id={id}
                isReserved={isReserved}
                isFirst={index === 0}
                isFirstInLastRow={index === EMPTY_SEAT_INDEX}
              />
            );
          })}
        </LeftSeats>
        <RightSeats>
          {rightSideSeats.map((seat, index) => {
            const {id, isReserved} = seat;
            return (
              <Seat
                key={id}
                id={id}
                isReserved={isReserved}
                isFirst={index === 0}
                isFirstInLastRow={index === EMPTY_SEAT_INDEX}
              />
            );
          })}
        </RightSeats>
      </FlexContainer>
      <FlexContainer flexFlow="row nowrap" justifyContent="space-around">
        {seatLegend.map(legend => (
          <SeatLegend
            key={legend.label}
            label={legend.label}
            borderColor={legend.borderColor}
            backgroundColor={legend.backgroundColor}
          />
        ))}
      </FlexContainer>
    </FlexContainer>
  );
};
