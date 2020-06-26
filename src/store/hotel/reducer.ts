import { HOTEL_TYPES, HotelInitialState, HotelAction } from './types';

export const hotelInitialState = {
  isLoading: false,
  error: null,
  jobs: []
} as HotelInitialState;

export default function jobReducer(state = hotelInitialState, action: HotelAction) {
  switch (action.type) {
    case HOTEL_TYPES.GET_HOTEL_STARTED: {
      return { ...state, isLoading: true };
    }

    case HOTEL_TYPES.GET_HOTEL_STARTED: {
      return {
        ...state,
        isLoading: false,
        error: null,
        hotels: action
      };
    }

    case HOTEL_TYPES.GET_HOTEL_STARTED: {
      return { ...state, isLoading: false, error: action };
    }

    default:
      return state;
  }
}
