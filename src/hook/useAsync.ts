import { useCallback, useEffect, useMemo, useState } from 'react';

const useAsync = <T, P = undefined, E = string>(
  asyncFunction: (params?: P) => Promise<T>,
  immediate: boolean,
  params?: P,
  initialState?: T
) => {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [value, setValue] = useState<T>((initialState || null) as T);
  const [error, setError] = useState<E | null>(null);

  const isLoading = useMemo(() => status === 'pending', [status]);

  const execute = useCallback(
    async (params?: P) => {
      setStatus('pending');
      setError(null);
      try {
        const res: T = await asyncFunction(params);
        setValue(res);
        (res as any)?.unProcessed?.length ? setStatus('error') : setStatus('success');
        return res;
      } catch (error: any) {
        setError(error);
        setStatus('error');
        throw new Error(error);
      }
    },
    [asyncFunction]
  );

  useEffect(() => {
    if (immediate) {
      execute(params);
    }
  }, [execute, immediate, params]);

  return { execute, status, value, error, isLoading, setValue } as const;
};

export default useAsync;
