import {
  Welcome,
  Skills,
  Contact,
  Proyects,
} from ".";

import { Navbar } from "../components/Navbar";

export const Home = () => {
  return ( <>
      <Navbar />
      <Welcome />
      <Proyects/>
      <Skills/>
      <Contact/>
      </>
  );
};
