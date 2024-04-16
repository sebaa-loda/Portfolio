import "../scss/pages/welcome/_welcome.scss";
import Photo from "../img/image.png";

export const Welcome = () => {
  return (
    <div id="inicio" className="welcome">
      <div className="welcome__container">
      <h1>Sebastián Patricio Loda</h1>
      <img src={Photo} alt="foto perfil" />
      <h2>Sobre mi</h2>
      <h4 className="welcome__trayectoria">
        Empecé mi trayectoria profesional como gerente de logistica en una
        distribuidora de cosmetica. Luego de la pandemia busque ampliarme al
        mundo virtual. Durante los ultimos 3 años estuve estudiando en modo
        autodidacta y trabajando en varios proyectos.
      </h4>
      <h4 className="welcome__actual">
        Actualmente sigo estudiando y busco ampliar mi campo laboral en el mundo
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
