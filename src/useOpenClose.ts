import { useCallback, useState } from 'react'

export const useOpenClose = (initalState: boolean = false) => {
  const [isOpen, setOpen] = useState(initalState)
  const onOpen = useCallback(() => setOpen(true), [])
  const onClose = useCallback(() => setOpen(false), [])
  return {
    isOpen,
    onOpen,
    onClose,
  }
}
