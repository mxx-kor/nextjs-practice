import {Grid} from '@giphy/react-components';

import {giphyFetch} from '@/src/apis/giphy';

import {useGifContext} from './GifWrapper';

const GifGrid = ({...props}) => {
  const {handleClick} = useGifContext();
  const fetchGifs = (offset: number) => giphyFetch.trending({offset, limit: 5});

  return (
    <Grid
      onGifClick={handleClick}
      fetchGifs={fetchGifs}
      width={852}
      columns={3}
      gutter={6}
      {...props}
    />
  );
};

export default GifGrid;
