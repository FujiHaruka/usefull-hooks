import { useCallback } from 'react'

import { useValues } from './useValues'

export interface UseAsyncValues<T> {
  ready: boolean
  busy: boolean
  result: T
  error: Error | null
}

export const useAsync = <Arg, Result, Empty>(
  fn: (...args: Arg[]) => Promise<Result>,
  emptyResult: Empty,
) => {
  const [{ ready, busy, result, error }, set] = useValues<
    UseAsyncValues<Result | Empty>
  >({
    ready: false,
    busy: false,
    result: emptyResult,
    error: null,
  })
  const doAsync = useCallback(
    (...args: Arg[]) => {
      set({ busy: true })
      return fn(...args)
        .then((success) => {
          set({
            result: success,
            ready: true,
            busy: false,
          })
          return success
        })
        .catch((e) => {
          console.error(e)
          set({
            result: emptyResult,
            error: e,
            busy: false,
          })
          throw e
        })
    },
    [fn, ready, busy],
  )
  const reset = useCallback(
    () =>
      set({
        ready: false,
        busy: false,
        result: emptyResult,
        error: null,
      }),
    [],
  )
  return {
    ready,
    busy,
    result,
    error,
    doAsync,
    reset,
  }
}
