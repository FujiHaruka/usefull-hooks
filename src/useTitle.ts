import { useEffect, useState } from 'react'
import { useMountEffect } from './useMountEffect'

export const useTitle = (
  title: string,
  options: { saveOriginal: boolean } = { saveOriginal: true },
) => {
  const { saveOriginal } = options
  const [original, setOriginal] = useState<string | null>(null)

  useMountEffect(() => {
    if (saveOriginal) {
      setOriginal(document.title)
    }
  })

  useEffect(() => {
    document.title = title
    return () => {
      if (saveOriginal && original !== null) {
        document.title = original
      }
    }
  }, [title, original])
}
