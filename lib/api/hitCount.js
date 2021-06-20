import countApi from './count-api';

const hitCount = async (dispatch, increment, setIsLoading, setMsg) => {
  const res = await countApi
    .get('/hit/testing/1ccb732e-b55a-4404-ad3f-0f99c02fe44e')
    .then((res) => {
      const count = res.data.value;
      if (res.data.error) {
        setMsg(res.data.error);
      }
      console.log('network call hitCount count: ', count);
      dispatch(increment({ count }));
      setIsLoading(false);
      console.log(res.data);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .then(() => {});
  return res;
};

export { hitCount };
