import { useContext } from "react"
import ThemeContext from "../contexts/ThemeContext"

const Header = () => {

    const { theme } = useContext(ThemeContext)
  
    return (
        <header className={`header bg-${theme}`}>

        </header>
    )
}

export default Header
