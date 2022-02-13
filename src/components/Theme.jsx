import { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'

const Theme = () => {

    const {theme, setTheme} = useContext(ThemeContext)

    const handleTheme = () => {
        switch (theme) {
            case 'light':
                setTheme('dark');
                localStorage.setItem('theme', 'dark');
                break;
            case 'dark':
                setTheme('light');
                localStorage.setItem('theme', 'light');
                break;
            default: 
                setTheme('light');
                localStorage.setItem('theme', 'light');
        }
    }

    return (
        <div className="theme">
            <h1 className="theme__heading">TODO</h1>

            <button className="theme__btn" onClick={handleTheme}>
                {theme === 'light' && <img className="theme__icon" src="./img/moon.png" alt="Sun" /> }
                {theme === 'dark' &&  <img className="theme__icon" src="./img/sun.png" alt="Moon" />}
            </button>
        </div>
    )
}

export default Theme
