import React, { useReducer, useContext, FunctionComponent } from 'react';

import useCombinedReducers from '../utils/useCombinedReducers';
import StoreContext from './types';

import hotelReducer, { hotelInitialState } from './hotel/reducer';

const StoreProvider: FunctionComponent = ({ children }) => {
  const [store, dispatch] = useCombinedReducers({
    //@ts-ignore
    hotelState: useReducer(hotelReducer, hotelInitialState)
  });

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export { StoreProvider, useStore };
