import {Outlet} from "react-router-dom"
import { Header } from "../../components/Header"
import {LayoutContainer} from "./styles"

export const DefaultLayout = () =>{
    return(
        <LayoutContainer>
            <Header totalAmount={18} />
            <Outlet />
        </LayoutContainer>
    )
}