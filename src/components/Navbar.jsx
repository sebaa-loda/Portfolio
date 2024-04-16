import {Link} from 'react-scroll'
import '../scss/components/navbar/_navbar.scss'


export const Navbar = () => {
  return (
    <nav className='nav-principal'>
      <button className='btn-nav'>
        <Link to='inicio' className='btn-nav__text'>Inicio</Link>
      </button>

      <button className='btn-nav'>
        <Link to='proyectos' className='btn-nav__text'>Proyectos</Link>
      </button>

      <button className='btn-nav'>
        <Link to='skills' className='btn-nav__text'>Tecnologías</Link>
      </button>

      <button className='btn-nav'>
        <Link to='contacto' className='btn-nav__text'>Contacto</Link>
      </button>
    </nav>
  )
}
