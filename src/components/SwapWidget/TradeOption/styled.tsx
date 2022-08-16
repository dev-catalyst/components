import styled from 'styled-components';
import { Box } from '../../';

export const SwapWrapper = styled(Box)`
  width: 100%;
  /* min-width: 400px; */
  position: relative;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const SwapAlertBox = styled(Box)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${({ theme }) => theme.venetianRed};
  padding: 7px;
  font-size: 12px;
  color: ${({ theme }) => theme.white};
`;
