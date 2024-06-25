import notifee, {TimestampTrigger, TriggerType} from '@notifee/react-native';

import {DAY_BEFORE_SECS} from '@/constants/date';

interface MovieNotification {
  price: number;
  seatsAmount: number;
  movieName: string;
}

export const scheduleNotification = async (
  date: string,
  sessionTime: string,
  ticketId: string,
  movieInformation: MovieNotification,
) => {
  const {price, seatsAmount, movieName} = movieInformation;
  const [startTime] = sessionTime.split('-');
  const [hours, minutes] = startTime.split(':');

  const notificationDate = new Date(date);
  notificationDate.setHours(+hours);
  notificationDate.setMinutes(+minutes);
  const notificationTimestamp = notificationDate.getTime() - DAY_BEFORE_SECS;
  const nowTimestamp = Date.now();

  if (nowTimestamp >= notificationTimestamp) {
    return;
  }

  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: notificationTimestamp,
  };

  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  await notifee.createTriggerNotification(
    {
      id: ticketId,
      title: 'You have upcoming booking!',
      body: `${movieName} at ${date}. ${seatsAmount} seats for ${price}$`,
      android: {
        channelId: channelId,
        pressAction: {
          id: 'default',
        },
      },
    },
    trigger,
  );
};
