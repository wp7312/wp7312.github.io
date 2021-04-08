import styled from 'styled-components'
import { TileProps } from './Tile'
import { Colors, IFSColor } from '../../../consts/colors';

export const TileStyles = styled.div`
    box-sizing: border-box;
    flex-basis: ${(props: TileProps) => props.flexGrow};
    color: ${Colors.mainBlue};
`

export const StyledDiv = styled.div`
    margin: 20px 10px 0 10px;
    padding: 7px 10px 0 10px;
    background-color:${(props: TileProps) => props.backgroundColor};
    border: 1px solid #c7dbea;
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3px 7px 15px 7px;
`;

export const LabelWrapper = styled.div`
  font-size: 13px;
  font-weight: 700;
  i {
    margin-left: 7px;
  }
`;

export const ToolsWrapper = styled.div`
  i {
    margin-left: 7px;
    color: ${IFSColor.silver}
  }
`;

export const CountersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;