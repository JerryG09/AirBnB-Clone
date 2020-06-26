import { createContext, Dispatch } from 'react';

import { hotelInitialState } from './hotel/reducer';

import { HotelInitialState, HotelAction } from './hotel/types';

// We define our type for the context properties right here
export type DispatchTypes = HotelAction;

// We define our type for the context properties right here
interface ContextProps {
  store: { hotelState: HotelInitialState };
  dispatch?: Dispatch<DispatchTypes>;
}

const StoreContext = createContext<ContextProps>({
  store: { hotelState: hotelInitialState }
});

export default StoreContext;
