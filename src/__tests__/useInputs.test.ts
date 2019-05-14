import { act, renderHook } from 'react-hooks-testing-library'

import { useInputs } from '../'

describe('useInputs', () => {
  const render = () =>
    renderHook((arg: any) =>
      useInputs(
        arg || {
          name: 'x',
          age: 20,
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
})
