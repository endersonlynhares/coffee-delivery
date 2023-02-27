import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CoffeeListContainer = styled.main`
    border: 1px solid red;
    padding: 3.2rem 16rem 16rem 16rem;
    flex-direction: column;
    display: flex;
    justify-content: center;
    
    h2{
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 130%;
        color: ${(props) => props.theme.colors["base-subtitle"]};
        border: 1px solid red;
     }

    }

`;

export const CoffeeList = styled.div`
  margin-top: 54px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.2rem;
`;

export const Tag = styled.button`
  color: ${(props) => props.theme.colors["primary-900"]};
  border: 1px solid ${(props) => props.theme.colors["primary-900"]};
  padding: 6px 12px;
  border-radius: 100px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 130%;
  transition: background 0.3s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.background};
    background-color: ${(props) => props.theme.colors["primary-900"]};
  }
`;
