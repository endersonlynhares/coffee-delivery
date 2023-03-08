import { ShoppingCart, MapPin, Sun, Moon } from "phosphor-react"
import { HeaderContainer, ButtonLocation, ButtonCart, SwitchContainer } from "./styles"
import logoLight from "../../assets/logo.svg"
import logoDark from "../../assets/logo-dark.svg"
import { Link } from "react-router-dom"
import { useTheme } from "styled-components"
import Switch from "react-switch"


interface HeaderProps {
    totalAmount: number
}

import { useContext } from "react"
import { OrderContext } from "../../contexts/OrderContext"
import { ThemeContext } from "../../contexts/ThemeContext"

export const Header = () => {
    const { title, colors } = useTheme()
    const { getTotalAmountOrder } = useContext(OrderContext)
    const {toggleTheme} = useContext(ThemeContext)

    return (
        <HeaderContainer>
            <header>
                <Link to="/">
                    <img src={title === "light" ? logoLight : logoDark} alt="" />
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
            <SwitchContainer>
                <Switch
                    onChange={toggleTheme}
                    checked={title === "light" ? true : false}
                    checkedIcon={
                        <Sun  size={20} weight="bold" />
                    }
                    uncheckedIcon={<Moon size={20} weight="bold" />}
                    onColor={colors["secondary-500"]}
                    height={25}
                />
            </SwitchContainer>
        </HeaderContainer>
    )
}