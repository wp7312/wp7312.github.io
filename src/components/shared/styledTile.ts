import styled from 'styled-components'
import { TileProps } from './Tile.styled'

export const StyledTile = styled.div`
    box-sizing: border-box;
    flex-basis: ${(props: TileProps) => props.flexGrow};
`

export const StyledDiv = styled.div`
    margin: 20px 10px 5px 10px;
    padding: 7px 10px 7px 10px;
    background-color:${(props: TileProps) => props.backgroundColor};
    height: 60px;
    border: 1px solid #c7dbea;
`