import { useNavigate } from "react-router-dom";
import "../scss/pages/layout/_layout.scss";
import Typewriter from "typewriter-effect";

export const Layout = () => {
  const navigate = useNavigate();

   setTimeout(() => {
      navigate('/home')
    }, 10000);

  return (
    <div className="layout">
      <div className="text">
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString("Bienvenidos!")

              .pauseFor(1000)
              .deleteAll()
              .typeString("A continuación mi Portfolio")
              .start();
          }}
        />
      </div>
    </div>
  );
};
