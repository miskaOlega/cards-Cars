import style from './style.module.css';
import { NavLink, useOutletContext } from 'react-router-dom';
import {TypeJson} from '../../Redux/selector';

export const TableCards = () => {
    const stateOutlet: TypeJson[] = useOutletContext();
    return (
        <>
        <div id={style.main}>

            <div id={style.tableCards}>
                {stateOutlet.map(i => <div key={i.id}>
                    <img src={i.images} alt={`${i.name}`} />
                    <h1 key={i.id}><NavLink style={{color: "whitesmoke"}} to={`/products/${i.id}`}>{i.name}</NavLink></h1>
                    </div>)}
                </div>
            
        </div>
        </>
    )
}