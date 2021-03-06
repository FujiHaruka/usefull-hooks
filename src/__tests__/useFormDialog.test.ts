import 'babel-polyfill'
import { act, renderHook } from '@testing-library/react-hooks'

import { useFormDialog } from '../'

describe('useFormDialog', () => {
  it('should call callbacks', async () => {
    const callbacks = {
      onOpen: jest.fn(),
      onClose: jest.fn(),
      onSubmit: jest.fn(() => Promise.resolve(1)),
    }

    const { result } = renderHook(() => useFormDialog(callbacks))

    act(() => result.current.onOpen())
    expect(callbacks.onOpen).toBeCalled()
    act(() => result.current.onClose())
    expect(callbacks.onClose).toBeCalled()
    await act(() => result.current.onCloseAfterSubmit())
    expect(callbacks.onClose).toBeCalledTimes(2)
    expect(callbacks.onSubmit).toBeCalled()
  })
})
