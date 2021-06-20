import { useEffect, useReducer, useState } from 'react';
import '../display-count/display-count';
import DisplayCount from '../display-count/display-count';
import PrimaryButton from '../primary-button/primary-button';
import StateWindow from '../state-window/state-window';
import Message from '../message/message';
import { getCount } from '../../../lib/api/getCount';
import { hitCount } from '../../../lib/api/hitCount';
import {
  reducer,
  increment,
  retrieveCount,
  getRecentCount,
} from '../reducer/reducer';

const PurpleCounter = () => {
  const [state, dispatch] = useReducer(reducer, reducer());
  const [isLoading, setIsLoading] = useState(true);
  const [msg, setMsg] = useState('');
  const [requestTrigger, setRequestTrigger] = useState(false);

  const hitRequest = () => setRequestTrigger(true);
  const resetTrigger = () => setRequestTrigger(false);

  useEffect(() => {
    console.log('retrieve count effect');
    getCount(dispatch, retrieveCount, setIsLoading, setMsg);
  }, []);

  useEffect(() => {
    console.log('increment effect');
    if (requestTrigger === true) {
      hitCount(dispatch, increment, setIsLoading, setMsg);
    }
    resetTrigger();
  }, [requestTrigger]);

  return (
    <>
      {isLoading && (
        <div>
          <span>Loading...</span>
        </div>
      )}
      {!isLoading && (
        <>
          <Message msg={msg} />
          <StateWindow state={state} />
          <DisplayCount count={getRecentCount(state)} />
          {console.log('state: ', state)}
          <PrimaryButton
            action={() => {
              hitRequest();
            }}
          />
        </>
      )}
    </>
  );
};

export default PurpleCounter;
