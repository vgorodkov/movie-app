import {ScrollView} from 'react-native';

import {ErrorFallback, LoadingFallback} from '@/components/UI';
import {VideoPlayer} from '@/components/VideoPlayer';
import {useGetMovieAdditionalInfoQuery} from '@/store/apiSlices/movieApi';

import {About} from './About';
import {Actors} from './Actors';
import {Reviews} from './Reviews';
import {contentListContentContainerStyle} from './styles';
import {ContentProps} from './types';

export const Content = ({isOpen, imdbid}: ContentProps) => {
  const {isLoading, data, isError} = useGetMovieAdditionalInfoQuery(imdbid);
  if (!isOpen) {
    return null;
  }

  if (isLoading) {
    return <LoadingFallback transparent />;
  }

  if (isError || !data) {
    return <ErrorFallback error="Error while loading content" />;
  }

  return (
    <ScrollView contentContainerStyle={contentListContentContainerStyle}>
      <VideoPlayer />
      <About plotSummary={data.plotSummary} />
      <Actors />
      <Reviews reviews={data.reviews} />
    </ScrollView>
  );
};
