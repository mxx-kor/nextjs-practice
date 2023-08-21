'use client';
import {IGif} from '@giphy/js-types';
import {Box, Tab, Tabs, Typography} from '@mui/material';
import {SyntheticEvent, useState} from 'react';

import GifWrapper from '@/components/giphy/GifWrapper';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const [value, setValue] = useState(0);
  const onClick = (gif: IGif, e: SyntheticEvent<HTMLElement, Event>) => {
    console.log('gif', gif);
    e.preventDefault();
    console.log('hi');
  };
  const handleChange = (_: SyntheticEvent, newValue: number) => {
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
          <Tab label='Gif' {...a11yProps(0)} />
          <Tab label='Emoji' {...a11yProps(0)} />
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
