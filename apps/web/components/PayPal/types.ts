import { Product } from '@plentymarkets/shop-api';

export type PaypalButtonPropsType = {
  type: string;
  disabled?: boolean;
  value?: {
    product: Product;
    quantity: number;
  };
};
