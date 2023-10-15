

import { useCallback } from 'react';
import axiosInstance from '../utils/axios';
import useAsync from '../hook/useAsync';
import { users } from '../types/users';

const useSaveUserApi = () => {
  const call = useCallback(async (body?: users) => {
    try {
      const res = await axiosInstance.post<users>('/users', body);
      return res.data;
    } catch (error:any) {
      throw new Error(error);
    }
  }, []);


  const { value, execute } = useAsync(call, false, undefined, {} as users);

  return { user: value, saveUser: execute };
};

export default useSaveUserApi;
