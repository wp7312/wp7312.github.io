import styled from 'styled-components'
import { TileProps } from './Tile'
import { Colors, IFSColor } from '../../../consts/colors';
import {calculateFlexBasis} from '../style.utils'

export const TileStyles = styled.div`
    box-sizing: border-box;
    color: ${Colors.mainBlue};
    flex-grow: 1;
    @media all and (min-width: 0px) and (max-width: 600px) {
      flex-basis: ${(props: TileProps) => calculateFlexBasis(props.size, 6, 6)};
    }
    @media all and (min-width: 601px) and (max-width: 1200px) {
      flex-basis: ${(props: TileProps) => calculateFlexBasis(props.size, 6, 3)};
    }
    @media all and (min-width: 1201px) and (max-width: 1700px) {
      flex-basis: ${(props: TileProps) => calculateFlexBasis(props.size, 6, 2)};
    }
    @media all and (min-width: 1701px) {
      flex-basis: ${(props: TileProps) => calculateFlexBasis(props.size, 6, 1)};
    }
`;

export const StyledMarginDiv = styled.div`
    padding: 20px 10px 0 10px;
    height: calc(100% - 20px);
`;

export const StyledDiv = styled.div`
    padding: 7px 10px 0 10px;
    background-color:${(props: TileProps) => props.backgroundColor};
    border: 1px solid #c7dbea;
    height: calc(100% - 9px);
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

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
