'use client';
import {GiphyFetch} from '@giphy/js-fetch-api';
import {IGif} from '@giphy/js-types';
import {Carousel, Gif, Grid} from '@giphy/react-components';
import {
  createContext,
  PropsWithChildren,
  SyntheticEvent,
  useContext,
  useState,
} from 'react';

type GifContextProps = {
  giphyFetch: GiphyFetch;
  handleClick?: (gif: IGif, e: SyntheticEvent<HTMLElement, Event>) => void;
};

type GifProps = GifContextProps & PropsWithChildren;

const GifContext = createContext<GifContextProps>({
  giphyFetch: new GiphyFetch(process.env.NEXT_PUBLIC_GIPHY_KEY as string),
  handleClick: () => {},
});

const GifWrapper = ({giphyFetch, handleClick, children}: GifProps) => {
  const value = {
    giphyFetch,
    handleClick,
  };
  return <GifContext.Provider value={value}>{children}</GifContext.Provider>;
};

const useGifContext = () => {
  const context = useContext(GifContext);
  return context;
};

const GifDemo = () => {
  const {giphyFetch} = useGifContext();
  const [gif, setGif] = useState<IGif | null>(null);
  const getData = async () => {
    const {data} = await giphyFetch.gif('7bU683xtQXPcEyP020');
    setGif(data);
  };
  getData();
  return gif && <Gif gif={gif} width={200} />;
};

const GifGrid = ({...props}) => {
  const {giphyFetch, handleClick} = useGifContext();
  const fetchGifs = (offset: number) => giphyFetch.trending({offset, limit: 5});

  return (
    <Grid
      onGifClick={handleClick}
      fetchGifs={fetchGifs}
      width={1000}
      columns={3}
      gutter={6}
      {...props}
    />
  );
};

const GifCarousel = ({...props}) => {
  const {giphyFetch, handleClick} = useGifContext();
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

GifWrapper.Gif = GifDemo;
GifWrapper.Grid = GifGrid;
GifWrapper.Carousel = GifCarousel;

export default GifWrapper;
