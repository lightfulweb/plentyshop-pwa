import { Cart, SessionResult } from '@plentymarkets/shop-api';
import { useSdk } from '~/sdk';
import { SetInitialData, UseInitialSetupReturn } from './types';

/** Function for getting current customer/cart data from session
 * @example
 * setInitialData();
 */
const setInitialData: SetInitialData = async () => {
  const { data, error } = await useAsyncData(() => useSdk().plentysystems.getSession());
  useHandleError(error.value);

  const { setUser } = useCustomer();
  setUser(data.value?.data as SessionResult);

  const { setCart } = useCart();
  setCart(data.value?.data.basket as Cart);
};

/**
 * @description Composable to get initial customer and cart data
 * @returns {@link UseInitialSetupReturn}
 * @example
 * const { setInitialData } = useInitialSetup();
 */

export const useInitialSetup: UseInitialSetupReturn = () => {
  return {
    setInitialData,
  };
};
