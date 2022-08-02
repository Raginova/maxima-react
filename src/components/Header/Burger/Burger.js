import './Burger.scss';
import { useState } from "react";
import { Link } from 'react-router-dom';

function Burger () {

    const [openeState, setCount] = useState(false);
     
    return (
        <>
            <button onClick={() => setCount(!openeState)} className= {`hamburger ${openeState ? 'hamburger__opened' :''}`} >
                <div className= {`hamburger__line ${openeState ? 'hamburger__opened' :''} hamburger__line_1`}></div>
                <div className= {`hamburger__line ${openeState ? 'hamburger__opened' :''} hamburger__line_2`}></div>
                <div className= {`hamburger__line ${openeState ? 'hamburger__opened' :''} hamburger__line_3`}></div>
            </button>
            <aside className= {`${openeState ? 'menu__opened' :'menu__aside'}`}>
                <Link to={""} className={'aside__link'}> Главная </Link>
                <Link to={"Works"} className={'aside__link'}> Работы </Link>
                <Link to={"Reviews"} className={'aside__link'}>Отзывы</Link> 
            </aside>
            <div onClick={() => setCount(!openeState)} className= {`Blur ${openeState ? 'blur_opened' :''}`} ></div>
        </>
    );   
}

export default Burger