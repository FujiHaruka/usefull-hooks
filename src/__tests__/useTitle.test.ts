import { act, renderHook } from '@testing-library/react-hooks'

import { useTitle } from '../'

describe('useTitle', () => {
  it('should change title', () => {
    document.title = 'original'
    renderHook(() => useTitle('title'))
    expect(document.title).toBe('title')
  })

  it('should keep original title', () => {
    document.title = 'original'
    const { unmount } = renderHook(() => useTitle('title'))
    expect(document.title).toBe('title')
    act(() => unmount())
    // FIXME:
    // expect(document.title).toBe('original')
  })

  it('should not keep original title if "keepOriginal" option is false', () => {
    document.title = 'original'
    const { unmount } = renderHook(() =>
      useTitle('title', { keepOriginal: false }),
    )
    expect(document.title).toBe('title')
    act(unmount)
    expect(document.title).toBe('title')
  })
})
