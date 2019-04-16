import { act, cleanup, renderHook } from 'react-hooks-testing-library'

import { useTitle } from '../'

afterEach(cleanup)

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
    expect(document.title).toBe('original')
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
