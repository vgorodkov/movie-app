import {Pressable, View} from 'react-native';

import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {selectSeat, unselectSeat} from '@/store/slices/ticketBooking';

export const Seat = ({
  id,
  isFirst,
  isFirstInLastRow,
  isReserved,
}: {
  id: number;
  isFirst: boolean;
  isFirstInLastRow: boolean;
  isReserved: boolean;
}) => {
  const dispatch = useAppDispatch();
  const isSeatSelected = useAppSelector(state =>
    state.ticketBooking.selectedSeats.includes(id),
  );

  const getBackgroundColor = () => {
    if (isReserved) {
      return '#C4C4C4';
    }
    if (isSeatSelected) {
      return '#D98639';
    }
    return 'transparent';
  };

  const onSeatPress = () => {
    if (isSeatSelected) {
      dispatch(unselectSeat(id));
    } else {
      dispatch(selectSeat(id));
    }
  };

  return (
    <>
      {(isFirst || isFirstInLastRow) && (
        <View style={{width: 32, height: 32}} />
      )}
      <Pressable
        onPress={onSeatPress}
        style={{
          width: 32,
          height: 32,
          borderWidth: 2,
          borderColor: '#787878',
          backgroundColor: getBackgroundColor(),
          borderRadius: 4,
        }}
      />
    </>
  );
};
