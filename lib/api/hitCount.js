import countApi from './count-api';

const hitCount = async (dispatch, increment, setIsLoading, setMsg) => {
  const res = await countApi
    .get('/hit/testing/1ccb732e-b55a-4404-ad3f-0f99c02fe44e')
    .then((res) => {
      const count = res.data.value;
      if (res.data.error) {
        setMsg(res.data.error);
      }
      dispatch(increment({ count }));
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setMsg('There was a problem');
    })
    .then(() => {});
  return res;
};

export { hitCount };
