import { Route, Routes } from "react-router-dom";
import { Main } from '../Components/Main/Main';
import { TableCards } from "../Components/TableCards/TableCards";
import { CreateProducts } from "../Components/CreateProducts/CreateProducts";
import { CardCar } from "../Components/CardCar/CardCar";

export const Routers = () => {
    return (
        <>
        <Routes>
        <Route path="/" element={<Main />}>
        <Route path="/products" element={<TableCards />} />
        <Route path="/products/:id" element={<CardCar />} />
        <Route path="/create-product" element={<CreateProducts />} />
        </Route>
        </Routes>
        </>
    )
}