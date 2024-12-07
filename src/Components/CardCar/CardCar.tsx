import { useParams } from "react-router-dom";
import style from './style.module.css';
import {useOutletContext } from 'react-router-dom';
import {TypeJson} from '../../Redux/selector';

export const CardCar = () => {
    const stateOutlet: TypeJson[] = useOutletContext();
    const {ids} = useParams();
    const stateOutIds = () => stateOutlet.find(i => i.id === Number(ids))
    return (
        <>
        <div id={style.main}>

            <div id={style.leftContent}>
                <img src={stateOutIds()?.images} alt={stateOutIds()?.name}/>
            </div>

        <div id={style.middleContent}></div>

            <div id={style.rightContent}>
                <h1>{stateOutIds()?.name}</h1>
                <p id={style.textInfo}>{stateOutIds()?.information}</p>
                <p>Цена: {stateOutIds()?.sale}$</p>
            </div>
        </div>
        </>
    )
}