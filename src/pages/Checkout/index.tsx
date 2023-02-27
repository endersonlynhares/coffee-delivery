import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"
import { CheckoutContainer,FormContainer,InputCustomized, ButtonPayPreference, PayFormContainer,AddressFormContainer,HeaderCardAdress, HeaderCardPay, AddressForm, PayForm, ConfirmForm} from "./styles"
import { useState } from "react"

export const Checkout = () => {

    const [methodPay, setMethodPay] = useState("")

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
                    <ButtonPayPreference onClick={() => setMethodPay("credit-card")} selected={methodPay === "credit-card"}>
                        <CreditCard size={16} />
                        cartão de credito
                    </ButtonPayPreference>
                    <ButtonPayPreference onClick={() => setMethodPay("debit-card")} selected={methodPay === "debit-card"}>
                        <Bank size={16} />
                        cartão de débito
                    </ButtonPayPreference>
                    <ButtonPayPreference onClick={() => setMethodPay("cash")} selected={methodPay === "cash"}>
                        <Money size={16} />
                        dinheiro
                    </ButtonPayPreference>
                </PayForm>
            </PayFormContainer>
            <ConfirmForm></ConfirmForm>
        </FormContainer>
        </CheckoutContainer>
    )
}