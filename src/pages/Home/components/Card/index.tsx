import { useState } from "react"
import { CardContainer, BuyCoffee, Tag, Tags, ButtonCart, Counter } from "./styles"
import { MapPin, Minus, Plus, ShoppingCart } from "phosphor-react"

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
    coffee: Coffee,
    // order: Coffee[] | [],
    // setOrder: any
}

export const Card = ({coffee}:CardProps) => {

    const [amount, setAmount] = useState(0)

    // const addToCart = () =>{
    //     setOrder([...order, {...coffee, amount: amount}])
    //     setAmount(0)
    // }

    return (
        <CardContainer>
            <img src={coffee.srcImg} alt="" />

            <Tags>
                {
                    coffee.tags.map(tag =>{
                        return(
                            <Tag key={tag}>{tag}</Tag>
                        )
                    })
                }
            </Tags>

            <h3>{coffee.title}</h3>
            <p>{coffee.description}</p>

            <BuyCoffee>

                <span>
                    R$ <span>{coffee.price}</span>
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

                <ButtonCart>
                    <ShoppingCart size={19} weight="fill" />
                </ButtonCart>

            </BuyCoffee>
        </CardContainer >
    )
}