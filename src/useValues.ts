import { Dispatch, SetStateAction, useMemo, useState } from 'react'

export type UseValuesAction<T> = Dispatch<SetStateAction<Partial<T>>>

export const buildValuesSetter = <T>(set: Dispatch<SetStateAction<T>>) => (
  action: SetStateAction<Partial<T>>,
) => {
  if (typeof action === 'function') {
    set((prev) => ({ ...prev, ...action(prev) }))
  } else {
    set((prev) => ({ ...prev, ...action }))
  }
}

export const useValues = <T extends { [key: string]: any }>(
  initialValues: T,
): [T, UseValuesAction<T>] => {
  const [values, set] = useState<T>(initialValues)

  const setValues = useMemo(() => buildValuesSetter(set), [set])

  return [values, setValues]
}
