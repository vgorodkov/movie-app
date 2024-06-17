import {ScrollView} from 'react-native';

import {VideoPlayer} from '@/components/VideoPlayer';
import {mockMovieDetails} from '@/data/mockMovieDetails';

import {About} from './About';
import {Actors} from './Actors';
import {Reviews} from './Reviews';
import {contentListContentContainerStyle} from './styles';
import {ContentProps} from './types';

export const Content = ({isOpen}: ContentProps) => {
  //const {isLoading, data} = useGetMovieAdditionalInfoQuery(imdbid);
  const data = mockMovieDetails;
  if (!isOpen) {
    return null;
  }

  /* if (isLoading || !data) {
    return (
      <Typography variant={TypographyVariant.LABEL_LARGE}>
        Loading...
      </Typography>
    );
  } */

  return (
    <ScrollView contentContainerStyle={contentListContentContainerStyle}>
      <VideoPlayer />
      <About plotSummary={data.plotSummary} />
      <Actors />
      <Reviews reviews={data.reviews} />
    </ScrollView>
  );
};
