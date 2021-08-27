import '../res/menu.css';
import { NavLink } from 'react-router-dom';
export const Menu = (props) => {
    return (
        <div className="navmenu">
            <div className="temp">뭔가 들어갈듯</div>
            <div className="menu_list">
                <ul>
                    <li><NavLink className="nav-link" to="/">HOME</NavLink></li>
                    <li><NavLink className="nav-link" to="/home">HOME2</NavLink></li>
                    <li>메뉴</li>
                </ul>
            </div>
        </div>
    )
}
