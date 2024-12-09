import { useForm , SubmitHandler } from 'react-hook-form';
import style from './style.module.css';
import { useDispatch , useSelector} from 'react-redux';
import { AppDispatch , RootState } from '../../Redux/store';
import {slice} from '../../Redux/selector';
import { useNavigate } from 'react-router-dom';


type FormValues = {
    name: string ,
    images: string,
    information: string ,
    sale: number
}
export const CreateProducts = () => {
    const useAppDispatch = useDispatch.withTypes<AppDispatch>()
    const useAppSelector = useSelector.withTypes<RootState>()
    const statuse = useAppSelector(state => state.getApi)
    const dispatch = useAppDispatch();
    const nav = useNavigate();
    const {register , handleSubmit} = useForm<FormValues>({
        mode: "onSubmit"
    }
    );
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        dispatch(slice.actions.newCard(data))
        nav(-1)
    }
    
    return (
        <>
        <div id={style.main}>
            <header id={style.header}>
                <h1>Создайте свою карточку продажи автомобиля</h1>
            </header>
        <article id={style.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div id={style.nameCar}>
                <input {...register("name" , {required: {value: true , message: "Введите название"}})} type="text" placeholder='Укажите название'/>
                <p>Укажите название автомобиля</p>
                </div>
                <div id={style.imagesCar}>
                    <input {...register("images")} type="url" placeholder='Укажите ссылку'/>
                    <p>Укажите ссылку на изображение автомобиля</p>
                </div>
                <div id={style.informationCar}>
                    <textarea {...register("information")} cols={50} rows={20} placeholder='укажите информация' />
                    <p>Укажите более обширную информацию об автомобиле</p>
                </div>
                <div id={style.saleCar}>
                    <input {...register("sale")} type="number" placeholder='укажите цену'/>
                    <p>Укажите цену на автомобиль</p>
                </div>
                <button>Создать карточку</button>
            </form>
        </article>
        </div>
        </>
    )
}