import styled from "styled-components";

import blur from "../../../../assets/blur-hero.svg"

export const HeroContainer = styled.div`
    min-height: 54.4rem;

    background-image: url(${blur});
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    padding: 9.4rem 16.0rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap:2rem;

    img{
        @media (max-width: 768px) {
            display: none;
        }
    }
   
`

export const TitleHero = styled.div`
    h2{
        color: ${props => props.theme.colors["base-title"]};
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 4.8rem;
        line-height: 130%;
    }

    p{
        color: ${props => props.theme.colors["base-subtitle"]};
        font-style: normal;
        font-weight: 400;
        font-size: 2rem;
        line-height: 130%;
    }
`

const ITEM_COLOR ={
    "cart": "primary-900",
    "package": "base-text",
    "clock": "primary-500",
    "coffee": "secondary-500"
} as const

interface ItemColorProps{
    typeColor: keyof typeof ITEM_COLOR
}

export const ItemsHero = styled.div`
    margin-top: 6.6rem;
    margin-bottom: 4rem;
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
`
export const Item = styled.div<ItemColorProps>`
    display: flex;
    align-items: center;
    margin-top: 2rem;
    min-width: 290px;

    font-size: 1.6rem;
    gap: 1.2rem;

    & svg{
        color: ${({ theme }) => theme.colors.background};
        border-radius: 50%;
        font-size: 2.8rem;
        background: ${props => props.theme.colors[ITEM_COLOR[props.typeColor]]} ;
        padding: 0.5rem;
    }

    svg:nth-child(2){
        background-color: ${({ theme }) => theme.colors["base-text"]};
    }

    & svg:nth-child(3){
        background-color: ${({ theme }) => theme.colors["secondary-500"]};
    }

    & svg:nth-child(4){
        background-color: ${({ theme }) => theme.colors["primary-100"]};
    }

    & span{
        line-height: 130%;
        font-size: 1.6rem;
    }

`