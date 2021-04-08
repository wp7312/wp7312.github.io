import styled from 'styled-components';
import { IFSColor } from '../../../../consts/colors';

export const ValueWrapper = styled.div`
  font-size: 36px;
`;

export const StatsWrapper = styled.div`
  font-size: 12px;
  i {
    margin-left: 7px;
  }
`;

export const StyledVerticalLine = styled.div`
  border-left: 2px solid ${IFSColor.heatherGrey};
  margin-right: 10px;
  margin-left: 10px;
  height: 27px;
`;

export const CounterWrapper = styled.div`
  display: flex;
  margin: 7px;
  align-items: baseline;
`;