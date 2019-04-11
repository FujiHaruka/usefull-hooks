import 'babel-polyfill'
import { act, cleanup, renderHook } from 'react-hooks-testing-library'

import { useAsync } from '../'

afterEach(cleanup)

describe('useAsync', () => {
  const render = () =>
    renderHook(() => useAsync((n: number) => Promise.resolve(n), 0))

  it('should work with async state', async () => {
    const { result } = render()

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
})
