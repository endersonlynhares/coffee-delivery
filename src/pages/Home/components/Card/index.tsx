import { useState, useContext } from "react"
import { CardContainer, BuyCoffee, Tag, Tags, ButtonCart, Counter } from "./styles"
import { Minus, Plus, ShoppingCart } from "phosphor-react"
import {OrderContext} from "../../../../contexts/OrderContext"

interface Coffee{
    id: string,
    title: string,
    tags: string[],
    description: string,
    srcImg: string,
    price: string,
    amount: number
}

interface CardProps{
    coffeeProps: Coffee,
}

export const Card = ({coffeeProps}:CardProps) => {
    const { addCoffee } = useContext(OrderContext)
    const [amount, setAmount] = useState(0)

    const addToCart = () =>{
        if(amount !== 0){
            addCoffee(coffeeProps, amount)
            setAmount(0) 
        }else{
            alert('Informe um valor')
        }
    }

    if(amount < 0){
        setAmount(0)
    }

    return (
        <CardContainer>
            <img src={coffeeProps.srcImg} alt="" />

            <Tags>
                {
                    coffeeProps.tags.map((tag: string) =>{
                        return(
                            <Tag key={tag}>{tag}</Tag>
                        )
                    })
                }
            </Tags>

            <h3>{coffeeProps.title}</h3>
            <p>{coffeeProps.description}</p>

            <BuyCoffee>

                <span>
                    R$ <span>{coffeeProps.price}</span>
                </span>

                <Counter>
                    <button onClick={() => setAmount((state: number) => state - 1)}>
                        <Minus size={14} weight="bold" />
                    </button>
                    <span>{amount}</span>
                    <button onClick={() => setAmount((state: number) => state + 1)}>
                        <Plus size={14} weight="bold" />
                    </button>
                </Counter>

                <ButtonCart onClick={() => addToCart()}>
                    <ShoppingCart size={19} weight="fill" />
                </ButtonCart>

            </BuyCoffee>
        </CardContainer >
    )
}