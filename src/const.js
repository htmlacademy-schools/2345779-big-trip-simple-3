export const POINT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
export const MODEL_DATE_FORMAT = 'YYYY-MM-DDTHH:mm';

export const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
};

export const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers'
};

export const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

export const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
};

export const defaultPoint = () => Object.assign({}, {
  'id': 0,
  'type': 'taxi',
  'base_price': 0,
  'date_from': getFormattedDate(),
  'date_to': getFormattedDate(),
  'destination': 1,
  'offers': [],
});

