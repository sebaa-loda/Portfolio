import { Welcome, Skills, Contact, Proyects } from ".";
import "../scss/pages/home/_home.scss";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <div className="container">

      <Navbar />
      <Welcome />
      <Proyects />
      <Skills />
      <Contact />
    </div>
  );
};
