import { useCallback } from 'react'
import { useValues } from './useValues'

// TODO: Cache
const TypeConverter = (inputs: any) => (value: any, forKey: string) => {
  switch (typeof inputs[forKey]) {
    case 'string':
      return String(value)
    case 'number':
      return Number(value)
    default:
      throw new Error('Unsupported type')
  }
}

export const useInputs = <T extends { [name: string]: any }>(
  initialInputs: T,
): {
  inputs: T
  onChange: { [P in keyof T]: (event: any) => void }
  reset: () => void
} => {
  const [inputs, setInputs] = useValues(initialInputs)
  const reset = useCallback(() => setInputs(initialInputs), [])
  const convert = TypeConverter(inputs)
  const onChange = Object.assign(
    {},
    ...Object.keys(inputs).map((key) => ({
      [key]: useCallback(
        (event: any) =>
          setInputs({
            [key]: convert(event.target.value, key),
          } as any),
        [],
      ),
    })),
  )
  return {
    inputs,
    onChange,
    reset,
  }
}
