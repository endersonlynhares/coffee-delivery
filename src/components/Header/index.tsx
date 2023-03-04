import { ShoppingCart, MapPin } from "phosphor-react"
import {HeaderContainer, ButtonLocation, ButtonCart} from "./styles"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"

interface HeaderProps{
    totalAmount: number
}

import { useContext } from "react"
import { OrderContext } from "../../contexts/OrderContext"

export const Header = () =>{

    const {getTotalAmountOrder} = useContext(OrderContext)
    
   return(
    <HeaderContainer>
        <header>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <div>
                <ButtonLocation>
                    <MapPin size={22} weight="fill" />
                    <span>Fortaleza, CE</span>
                </ButtonLocation>
                <ButtonCart> 
                    <Link to="/checkout">
                        <ShoppingCart size={22} weight="fill" />
                        <span>{getTotalAmountOrder()}</span>
                    </Link>
                </ButtonCart>
            </div>
        </header>
    </HeaderContainer>
   ) 
}