import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { DefaultLayout } from "./pages/layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout";


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
            </Route>
        </Routes>
    )
}