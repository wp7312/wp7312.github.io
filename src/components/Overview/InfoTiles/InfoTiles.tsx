import React from 'react'
import { Tile } from '../../shared/Tile/Tile'
import { Counter } from '../../shared/Tile/Counter/Counter';

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
        <div style={{display: 'flex', flexDirection: 'row', boxSizing: 'border-box'}}>
            <Tile title={'SYSTEMS'} counters={systemCounter} icon={'cog'} flexGrow={`${100 / 6}%`} backgroundColor='#edf6fc'/>
            <Tile title={'CONNECTIONS'} counters={connectionsCounter} icon={'handshake'} flexGrow={`${100 / 6}%`} backgroundColor='#e4f2fb'/>
            <Tile title={'CALLS'} counters={callsCounter} icon={'tachometer-alt'} flexGrow={`${100 / 6}%`} backgroundColor='#dbeef9'/>
            <Tile title={'DATA VOLUME'} counters={dataVolumeCounters} icon={'chart-pie'} flexGrow={`${100 / 2}%`} backgroundColor='#d2eaf8'/>
        </div>
    )
}