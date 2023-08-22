'use client';
import {IGif} from '@giphy/js-types';
import {Box, Tab, Tabs} from '@mui/material';
import {SyntheticEvent} from 'react';

import CustomTabPanel from '@/components/CustomTabPanel';
import GifWrapper from '@/components/giphy/GifWrapper';
import useTabs from '@/hooks/useTabs';

const Home = () => {
  const {value, handleChange} = useTabs();
  const onClick = (gif: IGif, e: SyntheticEvent<HTMLElement, Event>) => {
    console.log('gif', gif);
    e.preventDefault();
    console.log('hi');
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
          <Tab label='Gif' />
          <Tab label='Emoji' />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <GifWrapper.Grid />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <GifWrapper.EmojiGrid />
        </CustomTabPanel>
      </GifWrapper>
    </Box>
  );
};

export default Home;
