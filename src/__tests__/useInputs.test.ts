import { act, cleanup, renderHook } from 'react-hooks-testing-library'

import { useInputs } from '../'

afterEach(cleanup)

describe('useInputs', () => {
  const render = () =>
    renderHook(() =>
      useInputs({
        name: 'x',
        age: 20,
      }),
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
})
