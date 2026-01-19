// types.ts

import { PaymentMethod } from './payment-method';
import { Currency } from './currency';
import { TransactionStatus } from './transaction-status';

export interface Transaction {
  id: string;
  paymentMethod: PaymentMethod;
  amount: number;
  currency: Currency;
  status: TransactionStatus;
  timestamp: Date;
}

export interface PaymentMethod {
  type: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

export interface Currency {
  code: string;
  symbol: string;
}

export interface TransactionStatus {
  code: string;
  description: string;
}

export interface PaymentProcessorOptions {
  paymentMethod: PaymentMethod;
  amount: number;
  currency: Currency;
  callbackUrl: string;
}

export interface PaymentProcessorResponse {
  transactionId: string;
  status: TransactionStatus;
  timestamp: Date;
}