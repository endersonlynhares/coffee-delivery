import styled from "styled-components";

export const SuccessContainer = styled.div`
  width: 100%;
  padding: 40px 160px 40px 160px;
  justify-content: space-around;
  display: flex;

  h2 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: ${(props) => props.theme.colors["primary-500"]};
  }

  p {
    font-size: 20px;
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }

  img{
    align-self: flex-end;
  }

  @media (max-width: 820px) {
    padding: 60px;
    img {
      display: none;
    }
  }
`;

export const CardSuccess = styled.div`
  max-width: 526px;
  display: flex;
  flex-direction: column;

  gap: 32px;
  margin-top: 40px;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px;
  border: 2px solid transparent;

  padding: 40px;
`;

const ITEM_COLOR = {
  address: "secondary-500",
  timer: "primary-500",
  payform: "primary-900",
} as const;

interface ItemColorProps {
  typeColor: keyof typeof ITEM_COLOR;
}

export const ItemSuccess = styled.div<ItemColorProps>`
  display: flex;
  align-items: center;
  gap: 10px;   

  @media(max-width: 820px){
    text-align: center;
    flex-direction: column;
  }

  div {
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme.colors["base-text"]};
  }

  svg {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors[ITEM_COLOR[props.typeColor]]};

    border-radius: 50%;
    padding: 0.5rem;
  }
`;
