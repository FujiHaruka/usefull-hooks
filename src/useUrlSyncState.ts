import { useCallback, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'

const useUrlSyncState = <T>(
  initialState: T,
  stateToPath: (state: T) => string | null,
  history: RouteComponentProps['history'],
): [T, (state: T) => void] => {
  const [state, setState] = useState(initialState)
  const setStateWithChangingUrl = useCallback((value: T) => {
    setState(value)
    const nextPath = stateToPath(value)
    if (nextPath) {
      history.push(nextPath)
    }
  }, [])
  return [state, setStateWithChangingUrl]
}

export default useUrlSyncState
