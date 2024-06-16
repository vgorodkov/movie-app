import {useTranslation} from 'react-i18next';
import {useTheme} from 'styled-components';

import SeatIcon from '@/assets/icons/seat.svg';
import {Typography, TypographyVariant} from '@/components/UI';
import {TOTAL_SEATS} from '@/constants/cinema';
import {spacing} from '@/constants/spacing';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {
  resetSelectedSeats,
  selectMovieSession,
} from '@/store/slices/ticketBooking';
import {isBookingSessionSelected} from '@/store/slices/ticketBooking/selectors';
import {FlexContainer} from '@/styled/FlexContainer';

import {MovieSessionContainer} from './styles';
import {AvaibleSessionProps} from './types';

export const AvaibleSession = ({
  time,
  reservedSeats,
  cinemaType,
}: AvaibleSessionProps) => {
  const theme = useTheme();
  const {t} = useTranslation('home');
  const dispatch = useAppDispatch();
  const isSessionSelected = useAppSelector(isBookingSessionSelected(time));
  const AVAIBLE_SEATS_AMOUNT = TOTAL_SEATS - reservedSeats.length;

  const onAvaibleSessionPress = () => {
    dispatch(resetSelectedSeats());
    dispatch(selectMovieSession({time, reservedSeats, cinemaType}));
  };

  return (
    <MovieSessionContainer
      onPress={onAvaibleSessionPress}
      isActive={isSessionSelected}>
      <Typography
        alightSelf="flex-start"
        variant={TypographyVariant.LABEL_MEDIUM}>
        {time}
      </Typography>
      <Typography
        alightSelf="flex-start"
        variant={TypographyVariant.LABEL_SMALL}>
        Cinema: {cinemaType}
      </Typography>
      <FlexContainer flexFlow="row nowrap" gap={spacing.xs}>
        <SeatIcon color={theme.colors.primaryText} width={16} height={16} />
        <Typography variant={TypographyVariant.BODY_SMALL}>
          {AVAIBLE_SEATS_AMOUNT} {t('seats avaible')}
        </Typography>
      </FlexContainer>
    </MovieSessionContainer>
  );
};
