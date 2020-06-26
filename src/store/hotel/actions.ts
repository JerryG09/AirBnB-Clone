import API from '../../libs/api';
import {
  HotelInterface,
  HotelType,
  HotelAction,
  HOTEL_ACTION_TYPES,
  HOTEL_TYPES
} from './types';

const getHotelStarted = (): HotelAction => ({ type: HOTEL_TYPES.GET_HOTEL_STARTED });

const getHotelSuccess = (payload: HotelType[]): HotelAction => ({
  type: HOTEL_TYPES.GET_HOTEL_SUCCESS,
  payload
});

const getHotelError = (error: string): HotelAction => ({
  type: HOTEL_TYPES.GET_HOTEL_ERROR,
  payload: error
});

export default async function hotelActions(
  dispatch: any,
  actionType: string,
  payload?: string
) {
  // test calling for more post
  dispatch(getHotelStarted());

  switch (actionType) {
    case HOTEL_ACTION_TYPES.FETCH_ALL_HOTELS:
      try {
        // fetch all hotels
        const response = await API.get(payload ? `api/${payload}` : 'api');

        const data = (await response.json()) as HotelInterface[];

        const sectionMap = new Map();

        const jobs = Array.from(sectionMap.values()) as HotelType[];

        dispatch(getHotelSuccess(jobs));
      } catch (error) {
        dispatch(getHotelError(error.message));
      }
      break;

    default:
      break;
  }
}
