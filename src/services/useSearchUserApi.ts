

import { useCallback } from 'react';
import axiosInstance from '../utils/axios';
import useAsync from '../hook/useAsync';
import { users } from '../types/users';

const useSearchUserApi = () => {
  const call = useCallback(async (userName?: string) => {
    try {
      const res = await axiosInstance.get<users[]>(`/users?name=${userName}`,);
      return res.data;
    } catch (error:any) {
      throw new Error(error);
    }
  }, []);


  const { value, execute } = useAsync(call, false, undefined, [] as users[]);

  return { users: value, getUsers: execute };
};

export default useSearchUserApi;
