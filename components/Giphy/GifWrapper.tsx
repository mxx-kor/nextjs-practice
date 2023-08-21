import {IGif} from '@giphy/js-types';
import {
  createContext,
  PropsWithChildren,
  SyntheticEvent,
  useContext,
} from 'react';

import EmojiGrid from './EmojiGrid';
import GifCarousel from './GifCarousel';
import GifDemo from './GifDemo';
import GifGrid from './GifGrid';

type GifContextProps = {
  handleClick?: (gif: IGif, e: SyntheticEvent<HTMLElement, Event>) => void;
};

type GifProps = GifContextProps & PropsWithChildren;

const GifContext = createContext<GifContextProps>({
  handleClick: () => {},
});

const GifWrapper = ({handleClick, children}: GifProps) => {
  const value = {
    handleClick,
  };
  return <GifContext.Provider value={value}>{children}</GifContext.Provider>;
};

export const useGifContext = () => {
  const context = useContext(GifContext);
  return context;
};

GifWrapper.Gif = GifDemo;
GifWrapper.Grid = GifGrid;
GifWrapper.Carousel = GifCarousel;
GifWrapper.EmojiGrid = EmojiGrid;

export default GifWrapper;
