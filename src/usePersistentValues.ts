import { SetStateAction, useCallback, useEffect } from 'react'

import { JSONStorage } from './util/JSONStorage'
import { useValues, UseValuesAction } from './useValues'

export const usePersistentValues = <T>(
  key: string,
  initialValues: T,
): [T, UseValuesAction<T>] => {
  const [values, setValues] = useValues(initialValues)

  useEffect(() => {
    const storage = new JSONStorage<T>(key)
    const restored = storage.get()
    if (restored) {
      setValues(restored)
    }
  }, [])

  const setValuesPersistently: UseValuesAction<T> = useCallback(
    (action: SetStateAction<Partial<T>>) => {
      const storage = new JSONStorage<T>(key)
      if (typeof action === 'function') {
        setValues((prev) => {
          const nextValues: T = { ...prev, ...action(prev) } as any
          storage.save(nextValues)
          return nextValues
        })
      } else {
        setValues((prev) => {
          const nextValues: T = { ...prev, ...action } as any
          storage.save(nextValues)
          return nextValues
        })
      }
    },
    [],
  )
  return [values, setValuesPersistently]
}
