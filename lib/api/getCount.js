import countApi from './count-api';

const getCount = async (dispatch, retrieveCount, setIsLoading, setMsg) => {
  const res = await countApi
    .get('/get/testing/1ccb732e-b55a-4404-ad3f-0f99c02fe44e')
    .then((res) => {
      const count = res.data.value;
      if (res.data.error) {
        setMsg(res.data.error);
      }
      dispatch(retrieveCount({ count }));
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setMsg('There was a problem');
    })
    .then(() => {});

  return res;
};

export { getCount };
