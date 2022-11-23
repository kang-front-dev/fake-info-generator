import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { IErrorValue } from '../App';

export default function SliderErrors(props:IErrorValue) {

  let {errorValue,setErrorValue} = props.errorValueProps
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setErrorValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrorValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (errorValue < 0) {
      setErrorValue(0);
    } else if (errorValue > 100) {
      setErrorValue(100);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        Errors amount
      </Typography>
      <Grid container spacing={2} alignItems="center" style={{display: 'flex'}}>
        <Grid item>
          <ErrorOutlineIcon />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof errorValue === 'number' ? errorValue : 0}
            min={0}
            max={100}
            step={0.5}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <MuiInput
            value={errorValue}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 0.25,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
