import {callAPI} from '../api';

const ROOT_API = process.env.NEXT_PUBLIC_API;

export const getGreetingList = async () => {
  const url = `${ROOT_API}/greetings/list`;

  return callAPI({
    url,
    method: 'POST',
  });
};

export const createGreeting = async (data: any) => {
  const url = `${ROOT_API}/greetings/create`;

  return callAPI({
    url,
    method: 'POST',
    data,
  });
};

export const getConfirmByName = async (data: any) => {
  const url = `${ROOT_API}/confirmation/by-name`;

  return callAPI({
    url,
    method: 'POST',
    data,
  });
};

export const createConfirmation = async (data: any) => {
  const url = `${ROOT_API}/confirmation/create`;

  return callAPI({
    url,
    method: 'POST',
    data,
  });
};
