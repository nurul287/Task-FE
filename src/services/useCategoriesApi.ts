

import { useCallback } from 'react';
import { categories } from '../types/categories';
import axiosInstance from '../utils/axios';
import useAsync from '../hook/useAsync';

const useCategoriesApi = () => {
  const call = useCallback(async () => {
    try {
      const res = await axiosInstance.get<categories[]>('/categories');
      return res.data;
    } catch (error:any) {
      throw new Error(error);
    }
  }, []);


  const { value, execute } = useAsync(call, true, undefined, [] as categories[]);

  return { categories: value, getCategories: execute };
};

export default useCategoriesApi;
