import 'babel-polyfill'
import { act, renderHook } from '@testing-library/react-hooks'

import { useAsync } from '../'

describe('useAsync', () => {
  it('should work with async state', async () => {
    const { result } = renderHook(() =>
      useAsync((n: number) => Promise.resolve(n), 0),
    )

    expect(result.current.busy).toBeFalsy()
    expect(result.current.ready).toBeFalsy()
    expect(result.current.result).toBe(0)

    await act(async () => result.current.doAsync(1))

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
      await act(async () => result.current.doAsync(1))
    } catch (e) {
      error = e
    }

    expect(error).not.toBeNull()
    expect(result.current.error).not.toBeNull()
  })

  it('can recieve no argument function', async () => {
    const { result } = renderHook(() => useAsync(() => Promise.resolve(1), 0))

    await act(async () => result.current.doAsync())
    await Promise.resolve()
    expect(result.current.result).toBe(1)
  })
})
