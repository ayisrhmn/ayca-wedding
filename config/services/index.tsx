import {callAPI} from '../api';

const ROOT_API = process.env.NEXT_PUBLIC_API;

export const getHomePage = async () => {
  const url = `${ROOT_API}/landingpage`;

  return callAPI({
    url,
    method: 'GET',
  });
};

export const getProductByCategory = async (id: any) => {
  const url = `${ROOT_API}/landingpage/category/${id}`;

  return callAPI({
    url,
    method: 'GET',
  });
};

export const getCategoryPage = async () => {
  const url = `${ROOT_API}/landingpage/category`;

  return callAPI({
    url,
    method: 'GET',
  });
};

export const getDetailProduct = async (id: string) => {
  const url = `${ROOT_API}/landingpage/product/${id}`;

  return callAPI({
    url,
    method: 'GET',
  });
};
