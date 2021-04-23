import React from 'react'
import styled from 'styled-components'
import { Tile } from '../../shared/Tile/Tile'
import { Counter } from '../../shared/Tile/Counter/Counter';

const InfoTilesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    flex-wrap: wrap;
`;

export const InfoTiles = () => {
    const systemCounter = <><Counter value={123} stat={45}/></>;
    const connectionsCounter = <><Counter value={67} stat={8}/></>;
    const callsCounter = <><Counter value={901} stat={234}/></>;
    const dataVolumeCounters = <>
        <Counter value={56} stat={789}/>
        <Counter value={0} stat={1}/>
        <Counter value={234} stat={567}/>
    </>
    return (
        <InfoTilesWrapper>
            <Tile title={'SYSTEMS'} content={systemCounter} icon={'cog'} size={1} backgroundColor='#edf6fc'/>
            <Tile title={'CONNECTIONS'} content={connectionsCounter} icon={'handshake'} size={1} backgroundColor='#e4f2fb'/>
            <Tile title={'CALLS'} content={callsCounter} icon={'tachometer-alt'} size={1} backgroundColor='#dbeef9'/>
            <Tile title={'DATA VOLUME'} content={dataVolumeCounters} icon={'chart-pie'} size={3} backgroundColor='#d2eaf8'/>
        </InfoTilesWrapper>
    )
}