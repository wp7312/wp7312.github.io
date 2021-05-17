import React from 'react'
import styled from 'styled-components';
import { SingleDelta } from './SingleDelta';
import { Tile } from '../../shared/Tile/Tile';
import { IFSColor } from '../../../consts/colors';

const DeltasWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const DeltaTile = () => {

    const content = (
        <DeltasWrapper>
            <SingleDelta title={'System quantity'} total={594} delta={18} periods={'25.12.2019 - 14.02.2020'}
                         color={'#C9D7E6'}/>
            <SingleDelta title={'Unused systems'} total={88} delta={39} periods={'25.12.2019 - 14.02.2020'}
                         color={'#C2E3BF'}/>
            <SingleDelta title={'New systems'} total={2} delta={0} periods={'25.12.2019 - 14.02.2020'}
                         color={'#FEE8BF'}/>
            <SingleDelta title={'Deleted systems'} total={1} delta={0} periods={'25.12.2019 - 14.02.2020'}
                         color={'#F5D7D5'}/>
        </DeltasWrapper>
    )

    return (
        <Tile
            title={"DELTAS"}
            content={content}
            backgroundColor={IFSColor.white}
            size={2}/>
    )
}
