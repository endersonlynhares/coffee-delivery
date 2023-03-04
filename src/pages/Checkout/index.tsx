import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"
import { CheckoutContainer,FormContainer,InputCustomized, ButtonPayPreference, PayFormContainer,AddressFormContainer,HeaderCardAdress, HeaderCardPay, AddressForm,InforOrder, PayForm, ConfirmForm, ButtonConfirm, CoffeeList} from "./styles"
import { useContext, useState } from "react"
import { CardSelected } from "./components/CardSelected"
import { useTheme } from "styled-components"
import { OrderContext } from "../../contexts/OrderContext"

export const Checkout = () => {
    const theme = useTheme()

    const [methodPay, setMethodPay] = useState("")
    const { coffee, getTotalAmountPrice } = useContext(OrderContext)

    return (
        <CheckoutContainer>
        <FormContainer>
            <AddressFormContainer>
                <HeaderCardAdress>
                    <span>
                        <MapPinLine size={22} weight="bold" />
                        Endereço de Entrega
                    </span>
                    <span>
                        Informe o endereço onde deseja receber seu pedido
                    </span>
                </HeaderCardAdress>
                <AddressForm>
                   <div>
                        <InputCustomized placeholder="CEP"/>
                   </div>
                   <div>
                        <InputCustomized placeholder="Rua"/>
                   </div>
                   <div>
                        <InputCustomized placeholder="Número" />
                        <InputCustomized placeholder="Complemento"/>
                   </div>
                   <div>
                        <InputCustomized placeholder="Bairro"/>
                        <InputCustomized placeholder="Cidade" />
                        <InputCustomized placeholder="UF" />
                   </div>
                </AddressForm>
            </AddressFormContainer>
            <PayFormContainer>
            <HeaderCardPay>
                    <span>
                        <CurrencyDollar size={22} />
                        Pagamento
                    </span>
                    <span>
                        O pagamento é feito na entrega. Escolha a forma que deseja pagar
                    </span>
                </HeaderCardPay>
                <PayForm>
                    <ButtonPayPreference onClick={() => setMethodPay("credit-card")} selected={methodPay === "credit-card"} theme={theme}>
                        <CreditCard size={16} />
                        cartão de credito
                    </ButtonPayPreference>
                    <ButtonPayPreference onClick={() => setMethodPay("debit-card")} selected={methodPay === "debit-card"} theme={theme}>
                        <Bank size={16} />
                        cartão de débito
                    </ButtonPayPreference>
                    <ButtonPayPreference onClick={() => setMethodPay("cash")} selected={methodPay === "cash"}>
                        <Money size={16} />
                        dinheiro
                    </ButtonPayPreference>
                </PayForm>
            </PayFormContainer>
            <ConfirmForm>
                {coffee.length <= 0 ? "Adicione um café para concluir o pedido." : (
                    <CoffeeList>
                
                    {coffee && coffee.map(coffee => {
                            return(<CardSelected key={coffee.id} coffeeSelected={coffee} />)
                    })}
                   </CoffeeList>
                )}
               
               
                <InforOrder>
                    <div>
                        <span>Total de itens</span>
                        <span>R$ {String(getTotalAmountPrice().toFixed(2)).replace(".", ",")}</span>
                    </div>
                    <div>
                        <span>Entrega</span>
                        <span>R$ 3,50</span>
                    </div>
                    <div>
                        <span>Total</span>
                        <span>R$ {String((getTotalAmountPrice()+3.50).toFixed(2)).replace(".",",")}</span>
                    </div>
                </InforOrder>

                <ButtonConfirm type="submit">confirmar pedido</ButtonConfirm>
            </ConfirmForm>
        </FormContainer>
        </CheckoutContainer>
    )
}