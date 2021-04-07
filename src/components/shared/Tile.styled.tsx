import styled from 'styled-components'
import { StyledTile, StyledDiv } from './styledTile'

export interface TileProps {
    flexGrow: string,
    backgroundColor: string
}

export const Tile = (props: TileProps) => {

    return (
        <StyledTile {...props}>
            <StyledDiv {...props}>
            </StyledDiv>
        </StyledTile>
    )
}

export const Div = styled.div`
`

