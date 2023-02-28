import { useState } from "react"
import { CardContainer, InfoCard, DetailsCard, CountButton, ButtonDelete, CountButtonContainer} from "./styles"
import { Minus, Plus, Trash } from "phosphor-react"
import Coffee from "../../../../assets/coffee-images/arabe.png"

export const CardSelected = () => {
    return(
        <CardContainer>
            <InfoCard>
                <img src={Coffee} alt="" />
                <DetailsCard>
                    <p>Expresso Tradicional</p>
                    <div>
                        <CountButtonContainer>
                            <CountButton><Plus size={14} weight="bold" /></CountButton>
                            <span>0</span>
                            <CountButton><Minus size={14} weight="bold" /></CountButton>
                        </CountButtonContainer>
                        <ButtonDelete>
                            <Trash size={16} />
                            Remover
                        </ButtonDelete>
                    </div>
                </DetailsCard>
                <span>R$ 9,00</span>
            </InfoCard>   
        </CardContainer>
    )
}