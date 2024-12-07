import style from './style.module.css';
import { NavLink, useOutletContext } from 'react-router-dom';
import {TypeJson} from '../../Redux/selector';

export const TableCards = () => {
    const stateOutlet: TypeJson[] = useOutletContext();
    return (
        <>
        <div id={style.main}>
        <header id={style.header}><h1>Каталог автомобилей</h1></header>
            <div id={style.tableCards}>
                {stateOutlet.map(i => <div key={i.id}>
                    <NavLink style={{color: "whitesmoke" , textDecoration: "none"}} to={`/products/${i.id}`}>
                    <div className={style.blockTable}>
                    <img style={{borderColor: "black"}} src={i.images} alt={`${i.name}`} />
                    <h1 >{i.name}</h1>
                    </div>
                    </NavLink><div className={style.lickDeleteFavorite}>
                    <p>lick</p>
                        </div>
                        </div>
                    )}
                </div>
            
        </div>
        </>
    )
}