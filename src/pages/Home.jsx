import { Typography,Grid} from '@mui/material'

import {
  Welcome,
  Skills,
  Contact,
  Proyects,
  Education,
} from ".";

export const Home = () => {
  return (
    <Grid
    direction='column'
    sx={{backgroundColor:'primary.main'}}
    
    >
      <Welcome />
      <Proyects/>
      <Education/>
      <Skills/>
      <Contact/>
    </Grid>
  );
};
