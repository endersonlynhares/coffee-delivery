import {Outlet} from "react-router-dom"
import { Header } from "../../components/Header"
import {LayoutContainer } from "./styles"
import Switch from "react-switch"
import { useTheme } from "styled-components"


export const DefaultLayout = () =>{

    return(
        <LayoutContainer>
            <Header />
            <Outlet />
        </LayoutContainer>
    )
}