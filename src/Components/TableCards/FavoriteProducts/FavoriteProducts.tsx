import style from "./style.module.css";
import { BsFillHeartFill , BsFillFileEarmarkFill } from "react-icons/bs";
import {TypeJson , slice} from '../../../Redux/selector';
import { useDispatch , useSelector} from 'react-redux';
import { AppDispatch , RootState } from '../../../Redux/store';
import { useOutletContext , NavLink } from "react-router-dom";

export const FavoriteProducts = () => {
    const stateOutlet: [TypeJson[] , string] = useOutletContext();
    const useAppDispatch = useDispatch.withTypes<AppDispatch>()
    const useAppSelector = useSelector.withTypes<RootState>()
    const statuse = useAppSelector(state => state.getApi)
    const dispatch = useAppDispatch();
    return (
        <>
         <div id={style.favorite}>
                {statuse.favoriteCards.map(i => <div key={i.id}>
                    <NavLink style={{color: "whitesmoke" , textDecoration: "none"}} to={`/products/products/${i.id}`}>
                    <div className={style.blockTable}>
                    <img style={{borderColor: "black"}} src={i.images} alt={`${i.name}`} />
                    <h1 >{i.name}</h1>
                    </div>
                    </NavLink>
                    <div className={style.lickDeleteFavorite}>
                        <div className={style.lick}>
                        <p><BsFillHeartFill className={style.lickes} style={{color: statuse.data[statuse.data.findIndex(c => c.id === i.id)].likesOfUsers.some(g => g === stateOutlet[1]) ? "red" : 'black'}} onClick={() => {
                            dispatch(slice.actions.licke({ids: i.id, name: stateOutlet[1]}));
                        }
                        }
                            /></p>
                        <p style={{marginTop: "-1vh"}}>{statuse.data[statuse.data.findIndex(c => c.id === i.id)].likesOfUsers.length}</p>
                        </div>
                        <div className={style.favorite}>
                        <p><BsFillFileEarmarkFill className={style.lickes} onClick={() => {
                            dispatch(slice.actions.favorites(i.id));
                        }}/></p>
                        <p style={{fontSize: "1vh" , marginTop: "-1vh"}}>Добавить в избранное</p>
                        </div>
                        </div>
                        </div>
                    )}
                </div>
        </>
    )
}