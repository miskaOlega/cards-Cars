import style from './style.module.css';
import { useDispatch , useSelector} from 'react-redux';
import { AppDispatch , RootState } from '../../Redux/store';
import { useEffect } from 'react';
import { getApi } from '../../Redux/selector';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

export const Main = () => {
    const useAppDispatch = useDispatch.withTypes<AppDispatch>()
    const useAppSelector = useSelector.withTypes<RootState>()
    const statuse = useAppSelector(state => state.getApi)
    const dispatch = useAppDispatch();
    const nav = useNavigate();

    const activeLink = ({isActive}: {isActive: boolean}):{textDecoration: string , WebkitTextStroke: string , color: string} => ({
        textDecoration: "none",
        WebkitTextStroke: "0.05vh black",
        color: isActive ? "blue" : "azure"
    });

    useEffect(() => {
        dispatch(getApi());
        nav("/products");
    } , []);
    console.log(statuse.data);
    return (
        <>
        <div id={style.main}>
            <header id={style.header}>
                <nav id={style.nav}>
                    <p><NavLink style={activeLink} to='/products'>Главная</NavLink></p>
                    <p><NavLink style={activeLink} to='/create-product'>Создать свой товар</NavLink></p>
                    <p>Войти в аккаунт</p>
                </nav>
            </header>

            <article id={style.article}>
                <Outlet />
            </article>
        </div>
        </>
    )
}