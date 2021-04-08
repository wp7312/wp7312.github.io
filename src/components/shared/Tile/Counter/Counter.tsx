import React from 'react'
import { CounterWrapper, StatsWrapper, StyledVerticalLine, ValueWrapper } from './Counter.styles';

export interface CounterProps {
    value: number,
    stat: number
}

export const Counter = (props: CounterProps) => {

    return (
        <CounterWrapper>
            <ValueWrapper>
                {props.value}
            </ValueWrapper>
            <StyledVerticalLine/>
            <StatsWrapper>
                {props.stat}
                <i className="fas fa-arrow-up"/>
            </StatsWrapper>
        </CounterWrapper>
    )
}