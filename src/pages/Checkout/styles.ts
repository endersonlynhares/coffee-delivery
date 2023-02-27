import styled, { css, useTheme } from "styled-components";


export const CheckoutContainer = styled.main`
    width: 100%;
    padding: 40px 160px 0 160px;
    @media(max-width: 820px){
        padding: 60px;
    }
`

export const FormContainer = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    display: grid;
    grid-template-areas:
		"address confirm confirm"
		"address confirm confirm"
		"payment . ."
		;

    @media(max-width: 820px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }

`

const baseForm = styled.div`
    background-color: ${props => props.theme.colors["base-card"]};
    padding: 40px;
`

export const AddressFormContainer = styled(baseForm)`
    border-radius: 6px;
    grid-area: address;
`

export const AddressForm = styled.div`
    margin-top: 3.2rem;
    display: flex;
    flex-direction: column;
    gap: 16px;

    div{
        display: flex;
        gap: 12px;
        @media(max-width: 820px){
            flex-direction: column;
            align-items: center;
        }

        input{
            @media(max-width: 820px){
                width: 100%!important;
            }
        }

    }

    & div:nth-child(3){
        & input:nth-child(1){
            width: 20rem;
        }
    }
    & div:nth-child(4){
        & input:nth-child(1){
            width: 20rem;
        }
        & input:nth-child(3){
            width: 6rem;
        }
    }

`

export const InputCustomized = styled.input`
    background: ${props => props.theme.colors["base-input"]};
    border: 1px solid #E6E5E5;
    border-radius: 4px;
    font-size: 1.4rem;
    padding: 12px;
    width: 100%;
`

export const PayFormContainer = styled(baseForm)`
    border-radius: 6px;
    margin-top: 12px;
    grid-area:payment;
    @media(max-width: 820px){
        margin: 0;
    }
`

export const PayForm = styled.div`
    display: flex;
    margin-top: 32px;
    gap: 12px;  
    justify-content: center;
    align-items: center;
    @media(max-width: 820px){
        flex-direction: column;
    }
`

interface PaymentButtonProps{
    selected: boolean
};

const ButtonSelected = (selected: boolean) => css`
  border: ${selected ? '1px solid' : 'none'};
  border-color: ${selected && "#8047F8"};
`;

export const ButtonPayPreference = styled.button`
    cursor: pointer;
    width: 100%;
    background-color: ${props => props.theme.colors["base-button"]};
    text-transform: uppercase;
    font-size: 12px;
    line-height: 160%;
    color: ${props => props.theme.colors["base-text"]};
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;

    svg{
        color: ${props => props.theme.colors["secondary-900"]};
    }
    
    ${({selected}: PaymentButtonProps) =>
    ButtonSelected(selected)};
 
`

export const ConfirmForm = styled(baseForm)`
    display: flex;
    flex: 1;
    margin-left: 32px;
    grid-area: confirm;
    @media(max-width: 820px){
        margin: 0;
    }
`

const HeaderCard = styled.header`
    display: flex;
    flex-direction: column;
    line-height: 130%;

    & span:nth-child(1){
        font-size: 1.6rem;
        display: flex;
        gap: 8px;
        align-items: center;
        color: ${props => props.theme.colors["base-subtitle"]};
    }

    & span:nth-child(2){
        font-size: 1.4rem;
        margin-left: 30px;
        color: ${props => props.theme.colors["base-text"]};
        
    }


`

export const HeaderCardAdress = styled(HeaderCard)`
    svg{
            color: ${props => props.theme.colors["primary-900"]};
        }
`
export const HeaderCardPay = styled(HeaderCard)`
    svg{
            color: ${props => props.theme.colors["secondary-900"]};
        }
`

