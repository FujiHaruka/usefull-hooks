import { useCallback } from 'react'
import { useValues } from './useValues'

// TODO: Cache
const TypeConverter = (inputs: any) => (forKey: string) => (value: any) => {
  const type = typeof inputs[forKey]
  switch (type) {
    case 'string':
      return String(value)
    case 'number':
      return Number(value)
    case 'boolean':
      // FIXME: 'true' とかの文字列だったら困る
      return Boolean(value)
    default:
      throw new Error('Unsupported type')
  }
}

const ValueAttrSelector = (inputs: any) => (forKey: string) => (event: any) => {
  const type = typeof inputs[forKey]
  switch (type) {
    case 'string':
    case 'number':
      return event.target.value
    case 'boolean':
      // checkbox
      return event.target.checked
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
  const reset = useCallback(() => setInputs(initialInputs), [
    ...Object.values(initialInputs),
  ])
  const converter = TypeConverter(inputs)
  const selector = ValueAttrSelector(inputs)
  const onChange = Object.assign(
    {},
    ...Object.keys(inputs).map((key) => ({
      [key]: useCallback((event: any) => {
        const convert = converter(key)
        const select = selector(key)
        setInputs({
          [key]: convert(select(event)),
        } as any)
      }, []),
    })),
  )
  return {
    inputs,
    onChange,
    reset,
  }
}
