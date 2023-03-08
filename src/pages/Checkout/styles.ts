import styled, { css, useTheme } from "styled-components";
import {ThemeType} from "../../@types/styled"

export const CheckoutContainer = styled.main`
  width: 100%;
  padding: 40px 160px 40px 160px;
  @media (max-width: 820px) {
    padding: 60px;
  }
`;

export const FormContainer = styled.form`
  margin: 0 auto;
  max-width: 1200px;
  display: grid;
  grid-template-areas:
    "address confirm confirm"
    "address confirm confirm"
    "payment confirm confirm";

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
`;

const baseForm = styled.div`
  background-color: ${(props) => props.theme.colors["base-card"]};
  padding: 40px;
`;

export const AddressFormContainer = styled(baseForm)`
  border-radius: 6px;
  grid-area: address;
`;

export const AddressForm = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 16px;

  div {
    display: flex;
    gap: 12px;
    @media (max-width: 820px) {
      flex-direction: column;
      align-items: center;
    }

    input {
      color: ${props => props.theme.colors["base-text-input"]};
      @media (max-width: 820px) {
        width: 100% !important;
      }
    }
  }

  & div:nth-child(3) {
    & input:nth-child(1) {
      width: 20rem;
    }
  }
  & div:nth-child(4) {
    & input:nth-child(1) {
      width: 20rem;
    }
    & input:nth-child(3) {
      width: 6rem;
    }
  }
`;

export const InputCustomized = styled.input`
  background: ${(props) => props.theme.colors["base-input"]};
  border: 1px solid #e6e5e5;
  border-radius: 4px;
  font-size: 1.4rem;
  padding: 12px;
  width: 100%;
`;

export const PayFormContainer = styled(baseForm)`
  border-radius: 6px;
  margin-top: 12px;
  grid-area: payment;
  @media (max-width: 820px) {
    margin: 0;
  }
`;

export const PayForm = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 12px;
  justify-content: center;
  align-items: center;
  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

interface PaymentButtonProps {
  selected: boolean;
  theme: ThemeType
}

const ButtonSelected = (selected: boolean, theme: ThemeType) => css`
  border: ${selected ? "1px solid" : "none"};
  border-color: ${selected && theme.colors["secondary-500"]};
  background-color: ${selected && theme.colors["secondary-100"]} ;
  color: ${selected && theme.colors["base-title-pay"]}
`;

export const ButtonPayPreference = styled.div`
  cursor: pointer;
  width: 100%;
  background-color: ${(props) => props.theme.colors["base-input"]};
  text-transform: uppercase;
  font-size: 12px;
  line-height: 160%;
  color: ${(props) => props.theme.colors["base-subtitle"]};
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;

  svg {
    color: ${(props) => props.theme.colors["secondary-900"]};
  }

  ${({ selected, theme }: PaymentButtonProps) => ButtonSelected(selected, theme) };
`;

export const ConfirmForm = styled(baseForm)`
  width: 448px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-left: 32px;
  grid-area: confirm;

  span{
    color: ${props => props.theme.colors["base-subtitle"]};
  }

  @media (max-width: 820px) {
    margin: 0;
    width: 100%;
  }
`;

const HeaderCard = styled.header`
  display: flex;
  flex-direction: column;
  line-height: 130%;

  & span:nth-child(1) {
    font-size: 1.6rem;
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }

  & span:nth-child(2) {
    font-size: 1.4rem;
    margin-left: 30px;
    color: ${(props) => props.theme.colors["base-text"]};
  }
`;

export const HeaderCardAdress = styled(HeaderCard)`
  svg {
    color: ${(props) => props.theme.colors["primary-900"]};
  }
`;
export const HeaderCardPay = styled(HeaderCard)`
  svg {
    color: ${(props) => props.theme.colors["secondary-900"]};
  }
`;
export const InforOrder = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 14px;
  gap: 13.5px;
  color: ${(props) => props.theme.colors["base-text"]};
  div {
    display: flex;
    justify-content: space-between;
  }

  & div:last-child {
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-weight: bold;
    font-size: 20px;
  }
`;
export const ButtonConfirm = styled.button`
  text-transform: uppercase;
  border-radius: 6px;
  color: ${props => props.theme.colors.white};
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;
  background-color: ${(props) => props.theme.colors["primary-500"]};
  transition: background 0.2s;
  cursor: pointer;

  &:hover{
    background-color: ${(props) => props.theme.colors["primary-900"]};

  }

`;

export const CoffeeList = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  max-height: 300px;

  overflow: auto;
`;