import { useOpenClose } from './useOpenClose'
import { useCallback } from 'react'

export const useFormDialog = ({
  onOpen: onOpenProp,
  onClose: onCloseProp,
  onSubmit,
}: {
  onSubmit: () => Promise<any>
  onOpen?: () => void
  onClose?: () => void
}) => {
  const openClose = useOpenClose()
  const onOpen = useCallback(() => {
    openClose.onOpen()
    onOpenProp && onOpenProp()
  }, [onOpenProp])
  const onClose = useCallback(() => {
    openClose.onClose()
    onCloseProp && onCloseProp()
  }, [onCloseProp])
  const onCloseAfterSubmit = useCallback(
    () => onSubmit().then(() => onClose()),
    [onSubmit],
  )
  return {
    isOpen: openClose.isOpen,
    onOpen,
    onClose,
    onCloseAfterSubmit,
  }
}
