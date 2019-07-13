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
})
