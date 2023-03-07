import { useContext, useEffect, useState } from "react"
import { CardContainer, InfoCard, DetailsCard, CountButton, ButtonDelete, CountButtonContainer } from "./styles"
import { Minus, Plus, Trash } from "phosphor-react"
import { OrderContext } from "../../../../contexts/OrderContext"

interface Coffee {
    id: string,
    title: string,
    tags: string[],
    description: string,
    srcImg: string,
    price: string,
    amount: number
}

interface CardProps {
    coffeeSelected: Coffee,
}

export const CardSelected = ({ coffeeSelected }: CardProps) => {
    const {changeAmountCoffeeSelected, onRemoveCoffeeSelected} = useContext(OrderContext)
    const [amount, setAmount] = useState(coffeeSelected.amount)
    useEffect(() => {
        if (amount > 0) {
            changeAmountCoffeeSelected(coffeeSelected, amount)
        } else {
            alert('Informe um valor')
            setAmount(1)
        }
    }, [amount])

    function handleRemoveCoffeeSelected(){
        onRemoveCoffeeSelected(coffeeSelected)
    }

    return (
        <CardContainer>
            <InfoCard>
                <img src={coffeeSelected.srcImg} alt="" />
                <DetailsCard>
                    <p>{coffeeSelected.title}</p>
                    <div>
                        <CountButtonContainer>
                            <CountButton
                                onClick={() => setAmount((state: number) => state + 1)}
                            ><Plus size={14} weight="bold" /></CountButton>
                            <span>{amount}</span>
                            <CountButton
                                onClick={() => setAmount((state: number) => state - 1)}
                            ><Minus size={14} weight="bold" /></CountButton>
                        </CountButtonContainer>
                        <ButtonDelete onClick={handleRemoveCoffeeSelected}>
                            <Trash size={16} />
                            Remover
                        </ButtonDelete>
                    </div>
                </DetailsCard>
                <span>R$ {coffeeSelected.price}</span>
            </InfoCard>
        </CardContainer>
    )
}