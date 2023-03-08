import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
  align-items: center;
  margin-bottom: 4rem;

  width: 25.6rem;


  background: ${(props) => props.theme.colors["base-card"]};

  border-radius: 6px 36px;
  gap: 16px;
  padding: 2rem;

  text-align: center;

  img {
    min-width: 120px;
    min-height: 120px;
    margin-top: -5rem;
  }

  h3 {
    font-family: "Baloo 2";
    font-weight: 700;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }

  p {
    font-family: "Roboto";
    font-size: 1.4rem;
    line-height: 130%;
    color: ${(props) => props.theme.colors["base-label"]};
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  gap:10px;
`

export const Tag = styled.div`
  color: ${(props) => props.theme.colors["primary-900"]};
  background-color: ${(props) => props.theme.colors["primary-100"]};

  padding: 4px 8px;
  border-radius: 100px;

  text-transform: uppercase;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;

  line-height: 130%;
`;

export const BuyCoffee = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;
  margin-top: 2rem;
  /* margin-bottom: 2rem; */
  padding: 0px 10px;

  span{
    color: ${props => props.theme.colors["base-text"]};
    font-family: 'Roboto';
    font-size: 14px;
    line-height: 130%;

    span{    
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 130%;
    }

  }

`;

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  background: ${(props) => props.theme.colors["base-button"]};
  font-size: 1.6rem;
  color: ${props => props.theme.colors["base-title"]};
  border-radius: 6px;
  span{
    color: ${({ theme }) => theme.colors["secondary-500"]};

  }
  button {
    
    color: ${(props) => props.theme.colors["secondary-500"]};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover{
        color: ${(props) => props.theme.colors["secondary-900"]};
    }
  }
`;

export const ButtonCart = styled.button`
    border-radius: 6px;
    padding: 5px;
    text-align: center;
    color: ${props => props.theme.colors.icon};
    background: ${props => props.theme.colors["secondary-900"]};
    cursor: pointer;
    transition: background 0.1s;

    &:hover{
        background: ${props => props.theme.colors["secondary-500"]};
    }

`;
