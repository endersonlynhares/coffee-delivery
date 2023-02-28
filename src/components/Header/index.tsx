import { ShoppingCart, MapPin } from "phosphor-react"
import {HeaderContainer, ButtonLocation, ButtonCart} from "./styles"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"

interface HeaderProps{
    totalAmount: number
}

export const Header = ({totalAmount}:HeaderProps) =>{
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
                        <span>{totalAmount}</span>
                    </Link>
                </ButtonCart>
            </div>
        </header>
    </HeaderContainer>
   ) 
}