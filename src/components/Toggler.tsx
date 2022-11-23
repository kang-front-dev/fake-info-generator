import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ILang } from '../App';


export default function Toggler(props:ILang) {

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    props.langProps.setLang(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={props.langProps.lang}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="ru">Russian(RU)</ToggleButton>
      <ToggleButton value="en">English(EN)</ToggleButton>
      <ToggleButton value="de">Germany(DE)</ToggleButton>
    </ToggleButtonGroup>
  );
}
