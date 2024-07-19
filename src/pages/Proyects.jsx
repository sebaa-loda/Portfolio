import pokePhoto from "../img/pokeapi.png";
import glamourPhoto from "../img/glamour.png";
import cafePhoto from "../img/cafeteria.png";
import '../scss/pages/proyects/_proyects.scss'

export const Proyects = () => {
  return (
    <div id="proyectos" className="proyectos animate__animated animate__fadeInLeft">
      <h2>Proyectos</h2>

      <div className="proyectos__container">
        {/* <div className="tecnologias">
          <h4>Tecnologías utilizadas</h4>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Express</li>
            <li>Node</li>
            <li>PostgreSQL</li>
          </ul>
        </div> */}
        <div className="proyecto">
          <h4>PokeApi</h4>
          <p>
            Una SPA en donde consumo una API para mostrar Pokemons con sus
            respectivas estadísticas desde su valor de vida o ataque hasta su
            peso y altura. No solo se pueden filtrar pokemons según diferentes
            tipos, sino que el usuario también puede crear pokemons con
            distintas estadísticas y tipos a gusto.
          </p>
          <a href="https://github.com/sebaa-loda/pokemon-client">Ver Código</a>
          <img src={pokePhoto} alt="imagen pokeapi" />
        </div>

        <div className="proyecto">
          <h4>Glamour Glow</h4>
          <p>
            Una app de marketplace dedicada a la estética, conectando
            proveedores y clientes. Cuenta con un sistema de pago integrado a
            través de MercadoPago. La plataforma incluye tres roles distintos:
            Clientes, Proveedores y Admin moderador. Además, los usuarios pueden
            calificar a los proveedores y dejar reseñas para compartir sus
            experiencias.
          </p>
          <a href="https://github.com/EderFornero/Glamour-Glow">Ver Código</a>
          <img src={glamourPhoto} alt="imagen glamour glow" />
        </div>

        <div className="proyecto">
          <h4>Cafeteria Sass</h4>
          <p>
            Una página web estática sobre café usando HTML y Sass para ofrecer
            una experiencia inmersiva. Presenta distintas secciones, desde
            variedades y métodos de preparación hasta la historia del café.
            Además, incluye una página de contacto para interactuar con los
            visitantes.
            <br />
            <br />
          </p>
          <a href="https://github.com/sebaa-loda/Cafeteria-SASS">Ver Código</a>
          <img src={cafePhoto} alt="imagen cafeteria" />
        </div>
      </div>
    </div>
  );
};
