import { useNavigate } from "react-router-dom";
import "../scss/pages/layout/_layout.scss";
import Typewriter from "typewriter-effect";

export const Layout = () => {
  const navigate = useNavigate();

   setTimeout(() => {
      navigate('/home')
    }, 3200);

  return (
    <div className="layout">
      <div className="text">
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString("Bienvenidos!")
              .pauseFor(1000)
              .start();
          }}
        />
      </div>
    </div>
  );
};
