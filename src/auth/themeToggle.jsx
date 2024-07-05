import { useContext } from 'react';
import { ThemeContext } from './themeContext';
import "../scss/auth/_themeToggle.scss"

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className={`theme-toggle-button ${theme}-mode`} >
            Cambiar a {theme === 'light' ? 'modo oscuro' : 'modo claro'}
        </button>
    );
}

export default ThemeToggle;