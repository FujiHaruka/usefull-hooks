import { renderHook } from 'react-hooks-testing-library'

import { usePersistentValues } from '../'
import { JSONStorage } from '../util/JSONStorage'

describe('usePersistentValues', () => {
  const render = () =>
    renderHook(() =>
      usePersistentValues('user', {
        name: 'John',
        age: 20,
      }),
    )

  it('should return default values if not saved', () => {
    const storage = new JSONStorage('user')
    storage.clear()

    const { result } = render()
    const [values] = result.current
    expect(values).toEqual({
      name: 'John',
      age: 20,
    })
  })

  it('should return saved data if exists in localStorage', () => {
    const storage = new JSONStorage('user')
    storage.save({
      name: 'Jack',
      age: 21,
    })

    const { result } = render()
    const [values] = result.current
    expect(values).toEqual({
      name: 'Jack',
      age: 21,
    })
  })
})
