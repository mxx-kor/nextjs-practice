import {Grid} from '@giphy/react-components';

import {giphyFetch} from '@/apis/giphy';

import {useGifContext} from './GifWrapper';

const EmojiGrid = ({...props}) => {
  const {handleClick} = useGifContext();
  const fetchEmojis = (offset: number) => giphyFetch.emoji({offset, limit: 5});

  return (
    <Grid
      onGifClick={handleClick}
      fetchGifs={fetchEmojis}
      width={852}
      columns={3}
      gutter={6}
      {...props}
    />
  );
};

export default EmojiGrid;
