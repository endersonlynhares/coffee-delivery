import { CardContainer, InfoCard, DetailsCard, CountButton, ButtonDelete, CountButtonContainer} from "./styles"
import { Minus, Plus, Trash } from "phosphor-react"

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
    coffeeSelected: Coffee,
}

export const CardSelected = ({coffeeSelected}:CardProps) => {
    return(
        <CardContainer>
            <InfoCard>
                <img src={coffeeSelected.srcImg} alt="" />
                <DetailsCard>
                    <p>{coffeeSelected.title}</p>
                    <div>
                        <CountButtonContainer>
                            <CountButton><Plus size={14} weight="bold" /></CountButton>
                            <span>{coffeeSelected.amount}</span>
                            <CountButton><Minus size={14} weight="bold" /></CountButton>
                        </CountButtonContainer>
                        <ButtonDelete>
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