import { TitleHero, HeroContainer, ItemsHero, Item } from "./styles"
import heroImage from "../../../../assets/hero.png"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"

export const Hero = () => {
    return (
        <HeroContainer>
            <div>
                <TitleHero>
                    <h2>Encontre o café perfeito para qualquer hora do dia</h2>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </TitleHero>
                <ItemsHero>
                    <Item  typeColor="cart">
                        <ShoppingCart weight="fill" />
                        <span>Compra simples e segura </span>
                    </Item>
                    <Item  typeColor="package">
                        <Package weight="fill" />
                        <span>Embalagem mantém o café intacto</span>
                    </Item>
                    <Item typeColor="clock">
                        <Timer  weight="fill" />
                        <span>Entrega rápida e rastreada</span>
                    </Item>
                    <Item typeColor="coffee">
                        <Coffee weight="fill" />
                        <span>O café chega fresquinho até você</span>
                    </Item>
                </ItemsHero>
            </div>
            <img src={heroImage} alt="" />
        </HeroContainer>
    )
}