import { getRandomInt } from '../util';
import {TYPES, CITIES, getArrayFromType, DESCRIPTION} from './const.js';
import dayjs from 'dayjs';


const getDates = () => {
  const start = getRandomInt(1, 15);
  const end = getRandomInt(16, 31);
  return [dayjs().add(start, 'd'), dayjs().add(end, 'd')];
};

const createDestination = () => ({
  name: CITIES[getRandomInt(0, CITIES.length - 1)],
  photo: `http://picsum.photos/248/152?r=${getRandomInt(1, 100)}`,
  description: DESCRIPTION[getRandomInt(0, DESCRIPTION.length - 1)]
});

export const generatePoint = () => {
  const pointType = TYPES[getRandomInt(1, TYPES.length - 1)];
  const dates = getDates();
  const offersForType = getArrayFromType(pointType);
  return {
    type: pointType,
    destination: createDestination(),
    dateFrom: dates[0],
    dateTo: dates[1],
    price: getRandomInt(1, 1500),
    offers: offersForType.slice(getRandomInt(0, offersForType.length - 1))
  };
};

