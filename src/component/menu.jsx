import '../res/menu.css';
import { NavLink } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

export const Menu = (props) => {
    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <div className="navmenu">
            <div className="temp">뭔가 들어갈듯</div>
            <div className="menu_list">
                <ul>
                    <li><NavLink className="nav-link" to="/">HOME</NavLink></li>
                    <li><NavLink className="nav-link" to="/home">HOME2</NavLink></li>
                    <li>메뉴</li>
                    <li><NavLink className="nav-link" to="/board">게시판</NavLink></li>
                    <li><NavLink className="nav-link" to="/eat">뭐먹</NavLink></li>
                    <li><GoogleLogin
                        clientId="1047644500942-67e2i9lva85spte4rt32sr7vjj0ah5lf.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />,</li>
                </ul>
            </div>
        </div>
    )
}
