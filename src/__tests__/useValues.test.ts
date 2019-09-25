import { renderHook, act } from '@testing-library/react-hooks'

import { useValues } from '../'

describe('useValues', () => {
  const render = () =>
    renderHook(() =>
      useValues({
        count: 0,
        bool: false,
      }),
    )

  it('should have initial values', () => {
    const { result } = render()
    const [values] = result.current
    expect(values).toEqual({
      count: 0,
      bool: false,
    })
  })

  it('should update values', () => {
    const { result } = render()
    act(() => {
      const [_, set] = result.current
      set({
        count: 1,
      })
    })
    const [values] = result.current
    expect(values).toEqual({
      count: 1,
      bool: false,
    })
  })

  it('can reset', () => {
    const { result } = renderHook(() =>
      useValues<{ [key: string]: number }>({
        foo: 1,
        bar: 2,
      }),
    )

    act(() => {
      const [, set] = result.current
      set({
        baz: 3,
      })
    })
    expect(result.current[0].baz).toBe(3)
    act(() => {
      const [, , reset] = result.current
      reset()
    })
    expect(result.current[0]).toEqual({
      foo: 1,
      bar: 2,
    })
  })
})
