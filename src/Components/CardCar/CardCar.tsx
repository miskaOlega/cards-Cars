import { useParams } from "react-router-dom";

export const CardCar = () => {
    const {id} = useParams();
    return (
        <>
        <h1>{id}</h1>
        </>
    )
}