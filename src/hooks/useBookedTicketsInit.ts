import {useEffect} from 'react';

import {useAppDispatch} from '@/store/hooks';
import {initBookedTickets} from '@/store/slices/bookedTickets/thunk';

export const useBookedTicketsInit = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initBookedTickets());
  }, [dispatch]);
};
