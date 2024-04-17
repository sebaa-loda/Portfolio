import "../scss/components/navbar/_navbar.scss";

export const Navbar = () => {
  const handleClick = (target) => {
    const navbarHeight = 150; // Altura de tu navbar en píxeles
    const targetOffset = document.querySelector(target).offsetTop - navbarHeight;

    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="nav-principal">
      <button className="btn-nav" onClick={() => handleClick("#inicio")}>
        Inicio
      </button>

      <button className="btn-nav" onClick={() => handleClick("#skills")}>
        Tecnologías
      </button>

      <button className="btn-nav" onClick={() => handleClick("#proyectos")}>
        Proyectos
      </button>

      <button className="btn-nav" onClick={() => handleClick("#contacto")}>
        Contacto
      </button>
    </nav>
  );
};