import notifee, {TriggerType} from '@notifee/react-native';

import {DAY_BEFORE_SECS} from '@/constants/date';

import {scheduleNotification} from '.';

jest.mock('@notifee/react-native', () => ({
  createChannel: jest.fn(),
  createTriggerNotification: jest.fn(),
  TriggerType: {
    TIMESTAMP: 'timestamp',
  },
}));

describe('scheduleNotification', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should schedule a notification correctly', async () => {
    const date = '2024-06-20';
    const sessionTime = '18:00-20:00';
    const ticketId = 'ticket123';
    const movieInformation = {
      price: 15,
      seatsAmount: 2,
      movieName: 'Movie ',
    };

    const notificationDate = new Date(date);
    notificationDate.setHours(18);
    notificationDate.setMinutes(0);
    const notificationTimestamp = notificationDate.getTime() - DAY_BEFORE_SECS;

    (
      notifee.createChannel as jest.MockedFunction<typeof notifee.createChannel>
    ).mockResolvedValue('default-channel-id');

    await scheduleNotification(date, sessionTime, ticketId, movieInformation);

    expect(notifee.createChannel).toHaveBeenCalledWith({
      id: 'default',
      name: 'Default Channel',
    });

    expect(notifee.createTriggerNotification).toHaveBeenCalledWith(
      {
        id: ticketId,
        title: 'You have upcoming booking!',
        body: `${movieInformation.movieName} at ${date}. ${movieInformation.seatsAmount} seats for ${movieInformation.price}$`,
        android: {
          channelId: 'default-channel-id',
          pressAction: {
            id: 'default',
          },
        },
      },
      {
        type: TriggerType.TIMESTAMP,
        timestamp: notificationTimestamp,
      },
    );
  });

  it('should not schedule a notification if the current time is past the notification time', async () => {
    const date = '2024-06-18';
    const sessionTime = '18:00-20:00';
    const ticketId = 'ticket123';
    const movieInformation = {
      price: 15,
      seatsAmount: 2,
      movieName: 'Movie',
    };

    await scheduleNotification(date, sessionTime, ticketId, movieInformation);

    expect(notifee.createChannel).not.toHaveBeenCalled();
    expect(notifee.createTriggerNotification).not.toHaveBeenCalled();
  });
});
