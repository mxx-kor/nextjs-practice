'use client';
import {GiphyFetch} from '@giphy/js-fetch-api';
import {IGif} from '@giphy/js-types';
import {SyntheticEvent} from 'react';

import GifWrapper from '@/components/GifWrapper';

const Home = () => {
  const giphyFetch = new GiphyFetch(
    process.env.NEXT_PUBLIC_GIPHY_KEY as string,
  );

  const onClick = (gif: IGif, e: SyntheticEvent<HTMLElement, Event>) => {
    console.log('gif', gif);
    e.preventDefault();
    console.log('hi');
  };
  return (
    <main>
      <GifWrapper giphyFetch={giphyFetch} handleClick={onClick}>
        <GifWrapper.Gif />
        <h2>고양이들</h2>
        <GifWrapper.Carousel />
        <GifWrapper.Grid />
      </GifWrapper>
    </main>
  );
};

export default Home;
