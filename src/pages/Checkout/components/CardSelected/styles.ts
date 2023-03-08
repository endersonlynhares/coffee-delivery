import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  justify-content: space-between;
  flex-direction: column;

  &::after {
    content: "";
    border-bottom: 1px solid #e6e5e5;
  }
`;
export const InfoCard = styled.div`
  img {
    width: 64px;
  }

  span:last-child,
  p {
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors["base-text"]};
  }

  span:last-child {
    align-self: flex-start;
    margin-left: 3rem;

    @media (max-width: 800px) {
      align-self: center;
      margin-left: 0;
    }
  }

  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: center;
    flex-direction: column;
  }
`;
export const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  @media (max-width: 800px) {
    text-align: center;
  }
`;

const BaseButton = styled.div`
  padding: 8px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors["base-button"]};

  svg {
    color: ${({ theme }) => theme.colors["secondary-500"]};
  }
`;

export const CountButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  width: 7rem;
  height: 3.2rem;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  div {
    text-align: center;
    height: 3.2rem;
    background-color: ${(props) => props.theme.colors["base-button"]};
  }

  span {
    color: ${(props) => props.theme.colors["secondary-500"]};
  }
`;

export const CountButton = styled(BaseButton)`
  font-size: 1.6rem;
  text-align: center;
  background-color: transparent;
  padding: 2px;
`;

export const ButtonDelete = styled(BaseButton)`
  font-family: "Roboto";
  font-size: 12px;
  line-height: 160%;
  color: ${(props) => props.theme.colors["base-title-pay"]};

  border-radius: 6px;
  text-transform: uppercase;
  gap: 4px;
  border: 2px solid;
  border-color: transparent;
  cursor: pointer;
  transition: 0.2s;
  
  &:hover {
    /* background-color: ${(props) => props.theme.colors["base-hover"]}; */
    border: 2px solid;
    border-color: ${(props) => props.theme.colors["secondary-500"]};
    background-color: ${(props) => props.theme.colors["secondary-100"]};
    color: ${(props) => props.theme.colors["base-title-pay"]};
  }
`;
