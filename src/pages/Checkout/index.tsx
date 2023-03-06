import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"
import { CheckoutContainer, FormContainer, InputCustomized, ButtonPayPreference, PayFormContainer, AddressFormContainer, HeaderCardAdress, HeaderCardPay, AddressForm, InforOrder, PayForm, ConfirmForm, ButtonConfirm, CoffeeList } from "./styles"
import { useContext, useState } from "react"
import { CardSelected } from "./components/CardSelected"
import { useTheme } from "styled-components"
import { OrderContext } from "../../contexts/OrderContext"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"

interface AddressData {
    cep: string,
    rua: string,
    numero: string,
    complemento?: string,
    bairro: string,
    cidade: string,
    uf: string
}

const addressValidationSchema = zod.object({
    cep: zod.string().min(1),
    rua: zod.string().min(1),
    numero: zod.string().min(1),
    complemento: zod.string(),
    bairro: zod.string().min(1),
    cidade: zod.string().min(1),
    uf: zod.string().min(1).max(2)
})


export const Checkout = () => {
    const theme = useTheme()
    const { register, handleSubmit } = useForm<AddressData>({
        resolver: zodResolver(addressValidationSchema),
        defaultValues: {
            cep: "",
            rua: "",
            numero: "",
            complemento: undefined,
            bairro: "",
            cidade: "",
            uf: ""
        }
    })

    const [methodPay, setMethodPay] = useState("credit-card")
    const { coffee, getTotalAmountPrice, finishOrder } = useContext(OrderContext)

    const onSubmit = (data: AddressData) => {
        finishOrder(data, methodPay)
    }

    return (
        <CheckoutContainer>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
                            <InputCustomized {...register('cep', { required: true })} placeholder="CEP" required  />
                        </div>
                        <div>
                            <InputCustomized {...register('rua', { required: true })} placeholder="Rua" required />
                        </div>
                        <div>
                            <InputCustomized {...register('numero', { required: true })} placeholder="Número" required />
                            <InputCustomized {...register('complemento', { required: false })} placeholder="Complemento" />
                        </div>
                        <div>
                            <InputCustomized {...register('bairro', { required: true })} placeholder="Bairro" required />
                            <InputCustomized {...register('cidade', { required: true })} placeholder="Cidade" required />
                            <InputCustomized {...register('uf', { required: true })} placeholder="UF" required />
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
                                return (<CardSelected key={coffee.id} coffeeSelected={coffee} />)
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
                            <span>R$ {String((getTotalAmountPrice() + 3.50).toFixed(2)).replace(".", ",")}</span>
                        </div>
                    </InforOrder>

                    <ButtonConfirm type="submit">confirmar pedido</ButtonConfirm>
                </ConfirmForm>
            </FormContainer>
        </CheckoutContainer>
    )
}