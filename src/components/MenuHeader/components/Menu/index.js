import s from "../../style.module.css";
import cn from "classnames";
import {Link} from "react-router-dom";

const Menu = ({handleClickNull, isActive}) => {

    return (
        <div className={cn(s.menuContainer, {
            [s.active]: isActive === true,
            [s.deactive]: isActive === false
        })}>
            <div className={s.overlay}/>
            <div className={s.menuItems}>
                <ul>
                    <li>

                        <Link onClick={handleClickNull} to="/">
                            HOME
                        </Link>
                    </li>
                    <li>

                        <Link onClick={handleClickNull} to="/game">
                            GAME
                        </Link>
                    </li>
                    <li>

                        <Link onClick={handleClickNull} to="/about">
                            ABOUT
                        </Link>
                    </li>
                    <li>

                        <Link onClick={handleClickNull} to="/contact">
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu