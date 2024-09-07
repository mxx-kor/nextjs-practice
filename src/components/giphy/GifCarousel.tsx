import {Carousel} from '@giphy/react-components';

import {giphyFetch} from '@/src/apis/giphy';

import {useGifContext} from './GifWrapper';

const GifCarousel = ({...props}) => {
  const {handleClick} = useGifContext();
  const fetchGifs = (offset: number) =>
    giphyFetch.search('cats', {offset, limit: 5});

  return (
    <Carousel
      onGifClick={handleClick}
      fetchGifs={fetchGifs}
      gifHeight={150}
      gutter={3}
      {...props}
    />
  );
};

export default GifCarousel;
