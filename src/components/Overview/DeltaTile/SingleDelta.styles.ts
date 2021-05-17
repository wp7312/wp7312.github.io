import styled from 'styled-components'
import { Colors } from '../../../consts/colors';
import { SingleDeltaProps } from './SingleDelta';
import { calculateFilledWidth } from '../../shared/style.utils';

export const DeltaStyles = styled.div`
    width: 100%;
    margin-bottom: 10px;
`;

export const SummaryWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const TitlePeriodWrapper = styled.div`
    margin: 7px;
    padding-top: 3px;
`;

export const PeriodWrapper = styled.div`
    color: ${Colors.deltaPeriod};
    width: 115px;
    height: 12px;
    font-size: 10px;
`;

export const TitleWrapper = styled.div`
    color: ${Colors.deltaTitle};
    font-size: 14px;
    width: 110px;
    height: 16px;
`;

export const GraphicalStyles = styled.div`
    width: 100%;
    border: 1px solid ${(props: SingleDeltaProps) => props.color};
`;

export const Filled = styled.div`
    width: ${(props: SingleDeltaProps) => calculateFilledWidth(props.total, props.delta)};
    height: 7px;
    background-color: ${(props: SingleDeltaProps) => props.color}AA;
    border-right: 1px solid ${(props: SingleDeltaProps) => props.color};
`;
