import { createBrowserHistory } from 'history'

import useUrlSyncState from '../useUrlSyncState'
import { renderHook, cleanup, act } from 'react-hooks-testing-library'

afterEach(cleanup)

describe('useUrlSyncState', () => {
  type State = '/' | '/url-will-change' | '/url-will-not-change'
  const history = createBrowserHistory()
  const stateToPath = (value: State) => {
    if (value === '/url-will-not-change') {
      return null
    } else {
      return value
    }
  }
  const render = () =>
    renderHook(() => useUrlSyncState('/' as State, stateToPath, history))

  it('should sync state with url', () => {
    const { result } = render()
    {
      const [state] = result.current
      expect(state).toBe('/')
    }
    {
      const [_, setState] = result.current
      act(() => setState('/url-will-change'))
      const [state, __] = result.current
      expect(state).toBe('/url-will-change')
      expect(window.location.pathname).toBe('/url-will-change')
    }
    {
      const [_, setState] = result.current
      act(() => setState('/url-will-not-change'))
      const [state, __] = result.current
      expect(state).toBe('/url-will-not-change')
      expect(window.location.pathname).not.toBe('/url-will-not-change')
    }
  })
})
