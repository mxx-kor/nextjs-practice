import {SyntheticEvent, useState} from 'react';

const useTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return {
    value,
    handleChange,
  };
};

export default useTabs;
