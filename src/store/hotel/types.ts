/*
 **************************************************************
 ************************* JOB TYPES  *************************
 **************************************************************
 */

// JOB TYPES
export enum HOTEL_TYPES {
  GET_HOTEL_STARTED = 'GET_HOTEL_STARTED',
  GET_HOTEL_SUCCESS = 'GET_HOTEL_SUCCESS',
  GET_HOTEL_ERROR = 'GET_HOTEL_ERROR'
}

export enum HOTEL_ACTION_TYPES {
  FETCH_ALL_HOTELS = 'FETCH_ALL_HOTELS',
  PAGINATE_HOTELS = 'FETCH_ALL_HOTELS'
}

export type HotelType = {
  title: string;
  data: HotelInterface[];
};

// TYPESCRIPT TYPES
export type HotelInitialState = {
  isLoading: boolean;
  error?: string | null;
  jobs: HotelType[];
};

export type HotelInterface = {
  slug: string;
  id: string;
  epoch: string;
  date: Date;
  company: string;
  company_logo: string;
  position: string;
  tags: { name: string; color: string }[];
  description: string;
  original: boolean;
  verified: boolean;
  url: string;
};

export type HotelAction =
  | { type: HOTEL_TYPES.GET_HOTEL_STARTED }
  | {
      type: HOTEL_TYPES.GET_HOTEL_SUCCESS;
      payload: HotelType[];
    }
  | { type: HOTEL_TYPES.GET_HOTEL_ERROR; payload: String };