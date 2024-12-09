import style from "./style.module.css";
import { BsFillHeartFill , BsFillFileEarmarkFill } from "react-icons/bs";
import {TypeJson , slice} from '../../../Redux/selector';
import { useDispatch} from 'react-redux';
import { AppDispatch } from '../../../Redux/store';
import { useOutletContext , NavLink } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

export const Table = () => {
    const stateOutlet: [TypeJson[] , string] = useOutletContext();
    const useAppDispatch = useDispatch.withTypes<AppDispatch>()
    const dispatch = useAppDispatch();
    return (
        <>
         <div id={style.tableCards}>
                {stateOutlet[0].map(i => <div key={i.id}>
                    <NavLink style={{color: "whitesmoke" , textDecoration: "none"}} to={`/products/products/${i.id}`}>
                    <div className={style.blockTable}>
                    <img style={{borderColor: "black"}} src={i.images} alt={`${i.name}`} />
                    <h1 >{i.name}</h1>
                    </div>
                    </NavLink>
                    <div className={style.lickDeleteFavorite}>
                        <div className={style.lick}>
                        <p><BsFillHeartFill className={style.lickes} style={{color: i.likesOfUsers.some(g => g === stateOutlet[1]) ? "red" : 'black'}} onClick={() => {
                            dispatch(slice.actions.licke({ids: i.id, name: stateOutlet[1]}));
                        }
                        }
                            /></p>
                        <p style={{marginTop: "-1vh"}}>{i.likesOfUsers.length}</p>
                        </div>
                        <div className={style.favorite}>
                        <p><BsFillFileEarmarkFill 
                        className={style.lickes} onClick={() => {
                            dispatch(slice.actions.favorites(i.id));
                        }}/></p>
                        <p style={{fontSize: "1vh" , marginTop: "-1vh"}}>Добавить в избранное</p>
                        </div>
                        <div className={style.delete}>
                            <p><AiOutlineDelete style={{fontSize: "2vh"}} className={style.lickes} 
                            onClick={() => {dispatch(slice.actions.deleteCard(i.id))}}/></p>
                            </div>
                        </div>
                        </div>
                    )}
                </div>
        </>
    )
}