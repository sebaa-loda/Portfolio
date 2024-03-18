import {
  About,
  Welcome,
  Skills,
  Contact,
  Proyects,
  Education,
} from "./pages";

export const Home = () => {
  return (
    <div>
      <h1>Bienvenidos!</h1>

      <Welcome />
      <About />
      <Proyects/>
      <Education/>
      <Skills/>
      <Contact/>
    </div>
  );
};
