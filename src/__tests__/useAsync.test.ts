import 'babel-polyfill'
import { act, renderHook } from 'react-hooks-testing-library'

import { useAsync } from '../'

describe('useAsync', () => {
  it('should work with async state', async () => {
    const { result } = renderHook(() =>
      useAsync((n: number) => Promise.resolve(n), 0),
    )

    expect(result.current.busy).toBeFalsy()
    expect(result.current.ready).toBeFalsy()
    expect(result.current.result).toBe(0)

    act(async () => {
      // Warning in console
      void result.current.doAsync(1)
    })

    expect(result.current.busy).toBeTruthy()

    await Promise.resolve()

    expect(result.current.busy).toBeFalsy()
    expect(result.current.ready).toBeTruthy()
    expect(result.current.result).toBe(1)
  })

  it('should throw error', async () => {
    const { result } = renderHook(() =>
      useAsync((n: number) => Promise.reject('message'), 0),
    )

    let error: Error | null = null
    try {
      // Warning
      await result.current.doAsync(1)
    } catch (e) {
      error = e
    }

    expect(error).not.toBeNull()
    expect(result.current.error).not.toBeNull()
  })
})

it('can recieve no argument function', async () => {
  const { result } = renderHook(() => useAsync(() => Promise.resolve(1), 0))

  act(async () => {
    // Warning in console
    void result.current.doAsync()
  })
  await Promise.resolve()
  expect(result.current.result).toBe(1)
})
