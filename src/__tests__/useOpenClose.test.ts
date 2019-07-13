import { act, renderHook } from '@testing-library/react-hooks'

import { useOpenClose } from '../'

describe('useOpenClose', () => {
  const render = () => renderHook(() => useOpenClose())

  it('should update open / close state', () => {
    const { result } = render()

    act(() => result.current.onOpen())
    expect(result.current.isOpen).toBeTruthy()
    act(() => result.current.onClose())
    expect(result.current.isOpen).toBeFalsy()
  })
})
