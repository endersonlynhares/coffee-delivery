import { SuccessContainer, CardSuccess, ItemSuccess } from "./styles"
import SuccessDelivery from "../../assets/success-delivery.svg"
import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { useContext } from "react"
import { OrderContext } from "../../contexts/OrderContext"

export const Success = () => {

    const { order } = useContext(OrderContext)

    return (
        <SuccessContainer>
            <div>
                {order?.finishedOrder && <h2>Uhu! Pedido confirmado</h2>}
                {(!order?.id && (order?.coffee && order.coffee.length > 0) ) && <h2>Confirme o pedido no carrinho</h2>}
                {order?.finishedOrder && <p>Agora é só aguardar que logo o café chegará até você</p>}
                
                {
                    order?.finishedOrder && (
                        <CardSuccess>
                            <ItemSuccess typeColor="address">
                                <MapPin size={36} weight="bold" />
                                <div>
                                    Entrega em <strong>Rua {order.address && order.address.rua}, { order.address && order.address.numero}</strong><br />
                                    {order.address && order.address.cidade} - Fortaleza, CE
                                </div>
                            </ItemSuccess>
                            <ItemSuccess typeColor="timer">
                                <Timer size={36} weight="bold" />
                                <div>Previsão de entrega<br /><strong>20 min - 30 min</strong></div>
                            </ItemSuccess>
                            <ItemSuccess typeColor="payform">
                                <CurrencyDollar size={36} weight="bold" />
                                <div>Pagamento na entrega<br /><strong>{order.payForm}</strong></div>
                            </ItemSuccess>
                        </CardSuccess>
                    )
                }
            </div>
            <img src={SuccessDelivery} alt="" />
        </SuccessContainer>
    )
}