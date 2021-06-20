import cuid from 'cuid';

const initialState = {};

// action creators
const increment = ({
  id = cuid(),
  type = increment.type,
  timeStamp = Date.now(),
  count,
  isValid = /^\d+$/.test(count),
} = {}) => ({
  type: increment.type,
  payload: {
    id,
    type,
    timeStamp,
    count,
    isValid,
  },
});

increment.type = 'hit';

const retrieveCount = ({
  id = cuid(),
  type = retrieveCount.type,
  timeStamp = Date.now(),
  count,
  isValid = /^\d+$/.test(count),
} = {}) => ({
  type: retrieveCount.type,
  payload: {
    id,
    type,
    timeStamp,
    count,
    isValid,
  },
});

retrieveCount.type = 'get';

// reducer

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case increment.type:
      return { ...state, [payload.id]: payload };
    case retrieveCount.type:
      return { ...state, [payload.id]: payload };
    default:
      return state;
  }
};

// selector to get the latest valid count
const getRecentCount = (state) => {
  const validCount = Object.values(state).filter((count) => count.isValid);

  return Math.max(
    ...validCount.map((count) => {
      return count.count;
    })
  );
};

export { reducer, increment, retrieveCount, getRecentCount };
