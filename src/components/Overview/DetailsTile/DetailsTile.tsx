import React from 'react'
import styled from 'styled-components';
import { DetailedChartTile } from '../DetailedChartTile/DetailedChartTile';
import { DeltaTile } from '../DeltaTile/DeltaTile';

const DetailsWrapper = styled.div`
    display: flex;
`;

export const DetailsTile = () => {
    return (
        <DetailsWrapper>
            <DetailedChartTile />
            <DeltaTile />
        </DetailsWrapper>
    )
}
