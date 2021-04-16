import styled from 'styled-components'
import { calculateFlexBasis } from './style.utils'

export interface ButtonProps {
    size: number;
    value: string;
    color?: string;
    backgroundColor?: string;
}

export const Button = (props: ButtonProps) => {
    return (
        <StyledDiv {...props} >
            <StyledButton {...props} >
                {props.value}
            </StyledButton>
        </StyledDiv>
    )
}

export const DisabledDiv = styled.div`
    position: absolute;
    margin: 5px 10px 5px 10px;
    background-color: rgba(1,1,1,0.75);
    width: 100%;

`

export const StyledDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    overflow: hidden;
    @media all and (min-width: 0px) and (max-width: 600px) {
      flex-basis: ${(props: ButtonProps) => calculateFlexBasis(props.size, 6, 6)};
    }
    @media all and (min-width: 601px) and (max-width: 1200px) {
      flex-basis: ${(props: ButtonProps) => calculateFlexBasis(props.size, 6, 3)};
    }
    @media all and (min-width: 1201px) and (max-width: 1700px) {
      flex-basis: ${(props: ButtonProps) => calculateFlexBasis(props.size, 6, 2)};
    }
    @media all and (min-width: 1701px) {
      flex-basis: ${(props: ButtonProps) => calculateFlexBasis(props.size, 6, 1)};
    }
`

export const StyledButton = styled.button`
    font-weight: 500;
    width: 100%;

    padding: 7px 10px 7px 10px;
    margin: 5px 10px 5px 10px;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    justify-content: center;

    color: ${(props: ButtonProps) => props.color ? props.color : 'white'};
    background-color:${(props: ButtonProps) => props.backgroundColor ? props.backgroundColor : '#0B4A8E'};

    border: 1px solid #0B4A8E;
    border-radius: 0px;

    cursor: pointer;
`
