import { SuccessContainer, CardSuccess, ItemSuccess } from "./styles"
import SuccessDelivery from "../../assets/success-delivery.svg"
import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { useContext } from "react"
import { OrderContext } from "../../contexts/OrderContext"

interface payFormType{
    "credit-card": any,
    "debit-card": any,
    "cash": any
}

const PAY_FORM: payFormType = {
    "credit-card": "Cartão de Crédito",
    "debit-card": "Cartão de Débito",
    "cash": "Dinheiro"
} 





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
                                    {order.address && order.address.bairro} - {order.address?.cidade}, {order.address?.uf}
                                </div>
                            </ItemSuccess>
                            <ItemSuccess typeColor="timer">
                                <Timer size={36} weight="bold" />
                                <div>Previsão de entrega<br /><strong>20 min - 30 min</strong></div>
                            </ItemSuccess>
                            <ItemSuccess typeColor="payform">
                                <CurrencyDollar size={36} weight="bold" />
                                <div>Pagamento na entrega<br /><strong>{PAY_FORM[order.payForm as keyof typeof PAY_FORM]}</strong></div>
                            </ItemSuccess>
                        </CardSuccess>
                    )
                }
            </div>
            <img src={SuccessDelivery} alt="" />
        </SuccessContainer>
    )
}