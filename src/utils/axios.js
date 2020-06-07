import axios from 'axios';

export const setAuth = auth => {
  // TODO ENDABLE AUTH HEADER
  // axios.defaults.headers.common['access-token'] = auth.token;
  // axios.defaults.headers.common.client = auth.client;
  // axios.defaults.headers.common.uid = auth.uid;
};

export const removeSession = () => {
  // TODO REMOVE AUTH SESSION
  // delete axios.defaults.headers.common['access-token'];
  // delete axios.defaults.headers.common.client;
  // delete axios.defaults.headers.common.uid;
};

export default axios;
