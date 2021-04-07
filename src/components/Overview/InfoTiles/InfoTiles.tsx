import React from 'react'
import { Tile } from '../../shared/Tile.styled'

export const InfoTiles = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', boxSizing:'border-box' }}>
            <Tile flexGrow={`${100/6}%`} backgroundColor='#edf6fc'/>
            <Tile flexGrow={`${100/6}%`} backgroundColor='#e4f2fb'/>
            <Tile flexGrow={`${100/6}%`} backgroundColor='#dbeef9'/>
            <Tile flexGrow={`${100/2}%`} backgroundColor='#d2eaf8'/>
        </div>
    )
}