import { ShoppingCart, MapPin } from "phosphor-react"
import {HeaderContainer, ButtonLocation, ButtonCart} from "./styles"
import logo from "../../assets/logo.svg"

interface HeaderProps{
    totalAmount: number
}

export const Header = ({totalAmount}:HeaderProps) =>{
   return(
    <HeaderContainer>
        <header>
            <img src={logo} alt="" />
            <div>
                <ButtonLocation>
                    <MapPin size={22} weight="fill" />
                    <span>Fortaleza, CE</span>
                </ButtonLocation>
                <ButtonCart> 
                    <ShoppingCart size={22} weight="fill" />
                    <span>{totalAmount}</span>
                </ButtonCart>
            </div>
        </header>
    </HeaderContainer>
   ) 
}