import style from './style.module.css';
import { NavLink, Outlet, useOutletContext } from 'react-router-dom';
import { TypeJson } from '../../Redux/selector';
import { TypeActiveLink } from '../Main/Main';



export const TableCards = () => {
    const stateOutlet: [TypeJson[] , string , ({isActive}:{isActive: boolean}) => TypeActiveLink] = useOutletContext();
    const activeLink = stateOutlet[2]
    return (
        <>
        <div id={style.main}>
        <header id={style.header}><h1>Каталог автомобилей</h1></header>
        <nav id={style.nav}>
            <NavLink style={activeLink} to="/products/products"><p>Весь каталог</p></NavLink>
            <NavLink style={activeLink} to="/products/favorite-products"><p>Добавленное в избранное</p></NavLink>
        </nav>
        <Outlet context={stateOutlet} />
        </div>
        </>
    )
}