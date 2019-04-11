import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

type History = RouteComponentProps['history']

const HistoryContext = React.createContext<History>(null as any)

/**
 * Context provider for useHistory() hook
 */
export const HistoryContextProvider = ({
  history,
  children,
}: {
  history: History
  children: React.ReactNode
}) => (
  <HistoryContext.Provider value={history}>{children}</HistoryContext.Provider>
)

/**
 * Hook to use history object via context
 */
export const useHistory = (): History => {
  return React.useContext(HistoryContext)
}
