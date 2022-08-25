import styled from 'styled-components';
import { Box, CurrencyInput, TextInput } from '../../';

export const Root = styled(Box)`
  width: 100%;
  /* min-width: 360px; */
  position: relative;
  overflow: hidden;
`;

export const SwapWrapper = styled(Box)`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 100%;
  /* min-width: 360px; */
  background-color: ${({ theme }) => theme.swapWidget?.backgroundColor};
  position: relative;
  overflow: hidden;
`;

export const CurrencyInputTextBox = styled(CurrencyInput)`
  background-color: ${({ theme }) => theme.bg6};
  align-items: center;
  border-radius: 4px;
`;

export const InputText = styled(TextInput)`
  background-color: ${({ theme }) => theme.bg6};
  align-items: center;
  border-radius: 4px;
`;

export const ArrowWrapper = styled.div`
  background-color: ${({ theme }) => theme.bg6};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const PValue = styled(Box)<{ isActive: boolean }>`
  margin-left: 7px;
  margin-right: 7px;
  align-items: center;
  display: flex;
  width: 100%;
  font-size: 16px;
  color: ${({ theme }) => theme.textInput?.labelText};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)} 
  border-bottom: ${({ theme, isActive }) => (isActive ? `1px solid ${theme.text1}` : 0)};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.text1};
  }
`;
