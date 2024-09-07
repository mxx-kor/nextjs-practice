import {IGif} from '@giphy/js-types';
import {Gif} from '@giphy/react-components';
import {useState} from 'react';

import {giphyFetch} from '@/src/apis/giphy';

const GifDemo = () => {
  const [gif, setGif] = useState<IGif | null>(null);
  const getData = async () => {
    const {data} = await giphyFetch.gif('7bU683xtQXPcEyP020');
    setGif(data);
  };
  getData();
  return gif && <Gif gif={gif} width={100} />;
};

export default GifDemo;
