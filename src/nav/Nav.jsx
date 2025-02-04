import cl from "./Nav.module.scss";
import { NavLink } from 'react-router-dom';

import cheeseburgerImg from './img/cheeseburger.png';
import comboImg from './img/combo.png';
import donerImg from './img/doner.png';
import hotDogsImg from './img/hot-dogs.png';
import snacksImg from './img/snacks.png';
import pizzaImg from './img/pizza.png';
import wokImg from './img/wok.png';
import soucesImg from './img/souces.png';
import desertsImg from './img/deserts.png';

const Nav = () => {
    const navData = [
        {
            id: 1,
            imgSrc: cheeseburgerImg,
            title: "Бургеры",
            path: "/burgers"
        },
        {
            id: 11,
            imgSrc: snacksImg,
            title: "Закуски",
            path: "/snacks"
        },
        {
            id: 21,
            imgSrc: hotDogsImg,
            title: "Хот-доги",
            path: "/hot-dogs"
        },
        {
            id: 1211,
            imgSrc: comboImg,
            title: "Комбо",
            path: "/combo"
        },
        {
            id: 111221,
            imgSrc: donerImg,
            title: "Шаурма",
            path: "/shawarma"
        },
        {
            id: 312211,
            imgSrc: pizzaImg,
            title: "Пицца",
            path: "/pizza"
        },
        {
            id: 13112221,
            imgSrc: wokImg,
            title: "Вок",
            path: "/wok"
        },
        {
            id: 1113213211,
            imgSrc: desertsImg,
            title: "Десерты",
            path: "/deserts"
        },
        {
            id: 31131211131221,
            imgSrc: soucesImg,
            title: "Соусы",
            path: "/souces"
        }
    ];

    return (
        <div className={cl.wrapper}>
            <ul className={cl.nav}>
                {navData.map((item) => {
                    return (
                        <li key={item.id} className={cl.navLi}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive ? `${cl.active}` : ""
                                }
                            >
                                <img className={cl.iconImg} src={item.imgSrc} alt={item.title} />
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Nav;
