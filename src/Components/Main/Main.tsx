import style from './style.module.css';
import { useDispatch , useSelector} from 'react-redux';
import { AppDispatch , RootState } from '../../Redux/store';
import { useEffect } from 'react';
import { getApi , TypeJson} from '../../Redux/selector';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

export type TypeActiveLink = {
    textDecoration: string , 
    WebkitTextStroke: string , 
    color: string
}

export const Main = () => {
    const useAppDispatch = useDispatch.withTypes<AppDispatch>()
    const useAppSelector = useSelector.withTypes<RootState>()
    const statuse = useAppSelector(state => state.getApi)
    const dispatch = useAppDispatch();
    const nav = useNavigate();
    const activeLink = ({isActive}: {isActive: boolean}):TypeActiveLink => ({
        textDecoration: "none",
        WebkitTextStroke: "0.01vh black",
        color: isActive ? "blue" : "azure"
    });

    useEffect(() => {
        dispatch(getApi());
        nav("/products/products");
    } , []);
    const nameAccount = document.getElementById("accountName")?.textContent
    const stateOutlet:[TypeJson[] , string | null | undefined , ({isActive}:{isActive : boolean}) => TypeActiveLink] = [statuse.data , nameAccount , activeLink];
    return (
        <>
        <div id={style.main}>
            <header id={style.header}>
                <nav id={style.nav}>
                    <p><NavLink style={activeLink} to='/products/products'>Главная</NavLink></p>
                    <p><NavLink style={activeLink} to='/create-product'>Создать свой товар</NavLink></p>
                    <p id="accountName">Miska</p>
                </nav>
            </header>

            <article id={style.article}>
                <Outlet context={stateOutlet} />
            </article>
        </div>
        </>
    )
}