import React from 'react';
import {
    DeltaStyles, GraphicalStyles, PeriodWrapper, SummaryWrapper,
    TitlePeriodWrapper,
    TitleWrapper,
    Filled
} from './SingleDelta.styles';
import { Counter } from '../../shared/Tile/Counter/Counter';

export interface SingleDeltaProps {
    title: string;
    total: number,
    delta: number,
    periods: string,
    color: string
}

export const SingleDelta = (props: SingleDeltaProps) => {

    return (
        <DeltaStyles>
            <SummaryWrapper>
                <TitlePeriodWrapper>
                    <TitleWrapper>{props.title}</TitleWrapper>
                    <PeriodWrapper>{props.periods}</PeriodWrapper>
                </TitlePeriodWrapper>
                <Counter value={props.total} stat={props.delta}/>
            </SummaryWrapper>
            <GraphicalStyles {...props}>
                <Filled {...props}/>
            </GraphicalStyles>
        </DeltaStyles>
    )
}
