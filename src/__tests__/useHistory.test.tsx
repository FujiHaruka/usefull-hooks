import React, { useEffect } from 'react'
import { MemoryRouter, Route, RouteComponentProps } from 'react-router-dom'
import { cleanup, render } from 'react-testing-library'

import { useHistory, HistoryContextProvider } from '../'

afterEach(cleanup)

it('use history', () => {
  const Component = () => {
    const history = useHistory()
    useEffect(() => {
      history.push('/changed')
    }, [])
    return <div data-testid='location'>{history.location.pathname}</div>
  }
  const App = (props: RouteComponentProps) => {
    return (
      <HistoryContextProvider history={props.history}>
        <Component />
      </HistoryContextProvider>
    )
  }

  const { getByTestId } = render(
    <MemoryRouter>
      <Route component={App} />
    </MemoryRouter>,
  )

  expect(getByTestId('location').textContent).toBe('/changed')
})
