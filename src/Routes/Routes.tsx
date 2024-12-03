import { Route, Routes } from "react-router-dom";
import { Main } from '../Components/Main/Main';
import { TableCards } from "../Components/TableCards/TableCards";
import { CreateProducts } from "../Components/CreateProducts/CreateProducts";

export const Routers = () => {
    return (
        <>
        <Routes>
        <Route path="/" element={<Main />}>
        <Route path="/products" element={<TableCards />} />
        <Route path="/create-product" element={<CreateProducts />} />
        </Route>
        </Routes>
        </>
    )
}