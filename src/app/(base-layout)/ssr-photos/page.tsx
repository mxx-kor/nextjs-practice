import {Stack} from '@mui/material';
import {dehydrate, HydrationBoundary} from '@tanstack/react-query';

import Check from '@/src/components/Check';
import PhotoCard from '@/src/components/PhotoCard';
import {PhotoType} from '@/src/types/photo';

import {getPhotos} from '../../api/photos/photos';
import getQueryClient from '../../getQueryClient';

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
      <Stack gap={5} maxWidth='40rem' sx={{margin: '0 auto'}}>
        <Check />
        {photos?.slice(0, 10).map((photo) => (
          <PhotoCard key={photo.id} {...photo} />
        ))}
      </Stack>
    </HydrationBoundary>
  );
};

export default SSRPhotos;
