'use client';
import {IGif} from '@giphy/js-types';
import {Box, Tab, Tabs} from '@mui/material';
import {SyntheticEvent, useState} from 'react';

import GifWrapper from '@/components/Giphy/GifWrapper';

const Home = () => {
  const [value, setValue] = useState('one');
  const onClick = (gif: IGif, e: SyntheticEvent<HTMLElement, Event>) => {
    console.log('gif', gif);
    e.preventDefault();
    console.log('hi');
  };
  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box height='100%'>
      <GifWrapper handleClick={onClick}>
        <h2>고양이들</h2>
        <GifWrapper.Carousel />
        <h2>Trending 📈</h2>
        <Tabs
          variant='fullWidth'
          value={value}
          onChange={handleChange}
          textColor='secondary'
          indicatorColor='secondary'
          aria-label='gif and emoji tabs'
          centered
        >
          <Tab value='one' label='Gif' />
          <Tab value='two' label='Emoji' />
        </Tabs>
        <GifWrapper.Grid />
      </GifWrapper>
    </Box>
  );
};

export default Home;
