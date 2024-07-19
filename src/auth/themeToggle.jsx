import { useContext } from 'react';
import { ThemeContext } from './themeContext';
import "../scss/auth/_themeToggle.scss"

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className={`theme-toggle-button ${theme}-mode`} >
            {theme === 'light' ? 'Tema Claro' : 'Tema Oscuro'}
        </button>
    );
}

export default ThemeToggle;