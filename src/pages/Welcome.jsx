import "../scss/pages/welcome/_welcome.scss";
import Photo from "../img/image.png";

export const Welcome = () => {
  return (
    <div id="inicio" className="welcome  animate__animated animate__fadeInLeft">
      <div className="welcome__container">
      <h1>Sebastián Patricio Loda</h1>
      <img src={Photo} alt="foto perfil" />
      <h2>Sobre mi</h2>
      <h4 className="welcome__trayectoria">
        Empecé mi trayectoria profesional como encargado de logística en una
        distribuidora de cosmética. Luego de la pandemia nació mi pasión por el desarrollo web. Durante los ultimos 3 años estudié de modo
        autodidacta y trabajando en varios proyectos.
      </h4>
      <h4 className="welcome__actual">
        Actualmente sigo formandome y busco ampliar mi campo laboral en el mundo
        del desarrollo web.
      </h4>
      <h4 className="welcome__contacto">
        Si quieres ponerte en contacto conmigo, escribime a:
        <a href="mailto:sebasmdq96@hotmail.com"> sebasmdq96@hotmail.com</a>
      </h4>
      </div>
    </div>
  );
};
