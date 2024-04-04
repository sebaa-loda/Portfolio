import { Typography} from '@mui/material'

import {
  About,
  Welcome,
  Skills,
  Contact,
  Proyects,
  Education,
} from ".";

export const Home = () => {
  return (
    <div>
      <Typography variant='h1'>Bienvenidos!</Typography>

      <Welcome />
      <About />
      <Proyects/>
      <Education/>
      <Skills/>
      <Contact/>
    </div>
  );
};
