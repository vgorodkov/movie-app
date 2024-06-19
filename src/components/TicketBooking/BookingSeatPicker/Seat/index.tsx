import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {selectSeat, unselectSeat} from '@/store/slices/ticketBooking';
import {selectedSeatsSelector} from '@/store/slices/ticketBooking/selectors';

import {Empty, PressableSeat} from './styles';
import {SeatProps} from './types';

export const Seat = ({
  id,
  isFirst,
  isFirstInLastRow,
  isReserved,
}: SeatProps) => {
  const dispatch = useAppDispatch();
  const selectedSeats = useAppSelector(selectedSeatsSelector);

  const isSeatSelected = selectedSeats.includes(id);

  const onSeatPress = () => {
    if (isReserved) {
      return;
    }
    if (isSeatSelected) {
      dispatch(unselectSeat(id));
    } else {
      dispatch(selectSeat(id));
    }
  };

  return (
    <>
      {(isFirst || isFirstInLastRow) && <Empty />}
      <PressableSeat
        onPress={onSeatPress}
        isReserved={isReserved}
        isSelected={isSeatSelected}
      />
    </>
  );
};
