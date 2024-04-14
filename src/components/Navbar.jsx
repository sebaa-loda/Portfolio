import {Link} from 'react-scroll'
import '../scss/components/navbar/_navbar.scss'


export const Navbar = () => {
  return (
    <nav className='nav-principal'>
      <button className='btn-nav'>
        <Link to='inicio'>Inicio</Link>
      </button>

      <button className='btn-nav'>
        <Link to='proyectos'>Proyectos</Link>
      </button>

      <button className='btn-nav'>
        <Link to='skills'>Tecnologías</Link>
      </button>

      <button className='btn-nav'>
        <Link to='contacto'>Contacto</Link>
      </button>
    </nav>
  )
}
