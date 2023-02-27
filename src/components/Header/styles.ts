import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 32px 160px;
    header{
        width: 100vw;
        gap: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center
    }

    div{
        display: flex;
        align-items: center;
        gap: 2rem;
    }
`

const BaseButton = styled.button`
    padding: .8rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .4rem;
`

export const ButtonLocation = styled(BaseButton)`
    background: ${props => props.theme.colors["secondary-100"]};
    color: ${props => props.theme.colors['secondary-500']};

    span{
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 130%;
    }

    svg{
        color: ${props => props.theme.colors['secondary-900']};
    }
`

export const ButtonCart = styled(BaseButton)`
    background: ${props => props.theme.colors["primary-100"]};
    color: ${props => props.theme.colors['primary-900']};
    position: relative;
    span{
        background: ${props => props.theme.colors["primary-900"]};
        color: ${props => props.theme.colors['primary-100']};
        padding: 4px;
        border-radius: 1000px;

        position: absolute;
        right: -8.35px;
        top: -8px;

        height: 20px;
        width: 20px;
        
        text-align: center;
        font-size: 1.2rem;
    }

`