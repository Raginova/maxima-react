import './Header.scss';
import mops from './img/logo.png';
import Burger from './Burger/Burger'


function Header() {

    return(
        <header className={"Header-container"}>
            <div className={'Logo'}>
                <img className={'Logo__img'} src={ mops } alt='logo'></img>
                <h1 className={'Logo__h'}>Di Lashes</h1>
            </div>
            <Burger />   
        </header>
    );
}

export default Header