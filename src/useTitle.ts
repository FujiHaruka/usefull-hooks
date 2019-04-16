import { useEffect, useState } from 'react'
import { useMountEffect } from './useMountEffect'

export const useTitle = (
  title: string,
  options: { keepOriginal: boolean } = { keepOriginal: true },
) => {
  const { keepOriginal } = options
  const [original, setOriginal] = useState<string | null>(null)

  useMountEffect(() => {
    if (keepOriginal) {
      setOriginal(document.title)
    }
  })

  useEffect(() => {
    document.title = title
    return () => {
      if (keepOriginal && original !== null) {
        document.title = original
      }
    }
  }, [title, original])
}
