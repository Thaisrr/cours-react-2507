import { NavLink } from "react-router-dom";
import "../styles/navigation.css"
import {useSelector} from "react-redux";

const Navigation = function() {

    const count = useSelector(state => state.counter.value)

    return (
        <nav id="Nav">
            <ul>
                <li>
                    <NavLink to='/'>Présentation</NavLink>
                </li>
                <li>
                    <NavLink to='/routing'>Routing</NavLink>
                </li>
                <li>
                    <NavLink to='/static'>Conditionnel</NavLink>
                </li>
                <li>
                    <NavLink to='/list'>Listes</NavLink>
                </li>
                <li>
                    <NavLink to='/reactivity'>Réactivité</NavLink>
                </li>
                <li>
                    <NavLink to='/props'>Props</NavLink>
                </li>
                <li>
                    <NavLink to='/forms'>Formulaires</NavLink>
                </li>
                <li>
                    <NavLink to='/redux'>Redux</NavLink>
                </li>
                <li>🚀 {count}</li>
            </ul>
        </nav>
    )
}

export default Navigation;