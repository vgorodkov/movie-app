import {createAppAsyncThunk} from '@/store/types';
import {BookingTicket} from '@/types/booking';
import {getData} from '@/utils/encryptedStorage/getData';
import {updateData} from '@/utils/encryptedStorage/updateData';

export const initBookedTickets = createAppAsyncThunk(
  'bookedTickets/init',
  async (_, {rejectWithValue}) => {
    try {
      const bookedTickets = await getData('booking');
      if (bookedTickets) {
        return bookedTickets;
      } else {
        return [];
      }
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue('Error in initBookedTickets thunk');
    }
  },
);

export const addBookedTickets = createAppAsyncThunk(
  'bookedTickets/add',
  async (ticket: BookingTicket, {rejectWithValue, getState}) => {
    try {
      const bookedTickets = getState().bookedTickets.bookedTickets;
      const updatedBookedtickets = [...bookedTickets, ticket];
      await updateData('booking', updatedBookedtickets);
      return updatedBookedtickets;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue('Error in addBookedTickets thunk');
    }
  },
);

export const cancelBookedTickets = createAppAsyncThunk(
  'bookedTickets/cancel',
  async (ticketId: string, {rejectWithValue, getState}) => {
    try {
      const bookedTickets = getState().bookedTickets.bookedTickets;
      const updatedBookedtickets = bookedTickets.filter(
        ticket => ticket.ticketId !== ticketId,
      );
      await updateData('booking', updatedBookedtickets);
      return updatedBookedtickets;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue('Error in cancelBookedTickets thunk');
    }
  },
);
