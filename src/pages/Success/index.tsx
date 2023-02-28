import {SuccessContainer, CardSuccess, ItemSuccess} from "./styles"
import SuccessDelivery from "../../assets/success-delivery.svg"
import { CurrencyDollar, MapPin, Timer } from "phosphor-react"

export const Success = () =>{
    return(
        <SuccessContainer>
            <div>
                <h2>Uhu! Pedido confirmado</h2>
                <p>Agora é só aguardar que logo o café chegará até você</p>
                <CardSuccess>
                    <ItemSuccess typeColor="address">
                        <MapPin size={36} weight="bold" />
                        <div>
                            Entrega em <strong>Rua João Daniel Martinelli, 102</strong><br/>
                            Farrapos - Porto Alegre, RS
                        </div>
                    </ItemSuccess>
                    <ItemSuccess typeColor="timer">
                        <Timer size={36} weight="bold" />
                        <div>Previsão de entrega<br/><strong>20 min - 30 min</strong></div>
                    </ItemSuccess>
                    <ItemSuccess typeColor="payform">
                        <CurrencyDollar size={36} weight="bold" />
                        <div>Pagamento na entrega<br/><strong>Cartão de credito</strong></div>
                    </ItemSuccess>
                </CardSuccess>
            </div>
            <img src={SuccessDelivery} alt="" />
        </SuccessContainer>
    )
}