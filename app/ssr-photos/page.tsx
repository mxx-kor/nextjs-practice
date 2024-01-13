import {dehydrate, HydrationBoundary} from '@tanstack/react-query';

import {PhotoType} from '@/types/photo';

import {getPhotos} from '../api/photos/photos';
import getQueryClient from '../getQueryClient';

// using <Hydrate>
const SSRPhotos = async () => {
  const queryClient = getQueryClient();
  const photos = await queryClient.fetchQuery<PhotoType[]>({
    queryKey: ['photos'],
    queryFn: getPhotos,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      {photos?.map((photo) => (
        <p key={photo.id}>{photo.title}</p>
      ))}
    </HydrationBoundary>
  );
};

export default SSRPhotos;
