import React from 'react'
import { cleanup, fireEvent, render } from 'react-testing-library'

import { useAnchor } from '../'

afterEach(cleanup)

describe('usePopoverAnchor', () => {
  it('shold work', () => {
    const Component = () => {
      const { open, onOpen, onClose } = useAnchor()
      return (
        <>
          <button onClick={onOpen} data-testid={'open'}>
            open
          </button>
          <button onClick={onClose} data-testid={'close'}>
            close
          </button>
          <div data-testid='state'>{String(open)}</div>
        </>
      )
    }
    const { getByTestId } = render(<Component />)

    expect(getByTestId('state').textContent).toBe('false')

    fireEvent.click(getByTestId('open'))

    expect(getByTestId('state').textContent).toBe('true')

    fireEvent.click(getByTestId('close'))

    expect(getByTestId('state').textContent).toBe('false')
  })
})
