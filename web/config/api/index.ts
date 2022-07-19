import axios, {AxiosRequestConfig} from 'axios';

export const callAPI = async (props: AxiosRequestConfig) => {
  const {url, method, data} = props;

  const res = await axios({
    url,
    method,
    data,
  }).catch((err) => err.response);

  if (res.status > 300) {
    const response = {
      Error: true,
      Message: res.data.message,
      Data: null,
    };

    return response;
  }

  const response = {
    Error: false,
    Message: 'Success',
    Data: res.data.Data,
  };

  return response;
};
