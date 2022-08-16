import { Currency, Pair } from '@pangolindex/sdk';
import * as React from 'react';
import { TextInputProps } from '../TextInput/types';
export type CurrencyInputProps = TextInputProps & {
  currency?: Currency | null;
  pair?: Pair | null;
  onTokenClick?: () => void;
  textPrimaryColor?: string;
  textSecondaryColor?: string;
  selectPrimaryBgColor?: string;
  selectSecondaryBgColor?: string;
  inputFieldBgColor?: string;
};
