import {
  Welcome,
  Skills,
  Contact,
  Proyects,
  Education,
} from ".";

import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <Grid
    direction='column'
    sx={{backgroundColor:'primary.main'}}
    
    >
      <Navbar />
      <Welcome />
      <Proyects/>
      <Education/>
      <Skills/>
      <Contact/>
    </Grid>
  );
};
