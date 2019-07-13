import { act, renderHook } from '@testing-library/react-hooks'

import { useInputs } from '../'

describe('useInputs', () => {
  const render = () =>
    renderHook((arg: any) =>
      useInputs(
        arg || {
          name: 'x',
          age: 20,
          checked: false,
        },
      ),
    )
  const event = (value: any) => ({
    target: {
      value,
    },
  })

  it('should work', () => {
    const { result } = render()
    act(() => result.current.onChange.name(event('foo')))
    act(() => result.current.onChange.age(event('21')))
    expect(result.current.inputs.name).toBe('foo')
    expect(result.current.inputs.age).not.toBe('21')
    expect(result.current.inputs.age).toBe(21)
  })

  it('should reset', () => {
    const { result } = render()
    act(() => result.current.onChange.name(event('foo')))
    act(() => result.current.onChange.age(event('21')))
    act(() => result.current.reset())
    expect(result.current.inputs.name).toBe('x')
    expect(result.current.inputs.age).toBe(20)
  })

  it('should reset other values', () => {
    const { rerender, result } = render()
    rerender({
      name: 'x',
      age: 10,
    })

    act(() => result.current.reset())
    expect(result.current.inputs.age).toBe(10)
  })

  it('checkbox', () => {
    const { result } = render()
    act(() =>
      result.current.onChange.checked({
        target: {
          checked: true,
        },
      }),
    )
    expect(result.current.inputs.checked).toBe(true)
    act(() =>
      result.current.onChange.checked({
        target: {
          checked: false,
        },
      }),
    )
    expect(result.current.inputs.checked).toBe(false)
  })
})
