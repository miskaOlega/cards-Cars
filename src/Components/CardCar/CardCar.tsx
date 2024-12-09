import { useNavigate, useParams } from "react-router-dom";
import style from './style.module.css';
import {useOutletContext } from 'react-router-dom';
import {TypeJson} from '../../Redux/selector';

export const CardCar = () => {
    const stateOutlet: [TypeJson[] , string | null | undefined] = useOutletContext();
    const {ids} = useParams();
    const stateOutIds = () => stateOutlet[0].find(i => i.id === Number(ids));
    const nav = useNavigate();
    return (
        <>
        <div id={style.main}>
        <button onClick={() => {nav(-1)}}>Вернуться назад</button>
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