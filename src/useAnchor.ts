import { useCallback, useState } from 'react'

/**
 * Hook to use anchor for popover menu
 * https://material-ui.com/demos/menus/#menus
 */
export const useAnchor = () => {
  const [anchorEl, setAnchorEl] = useState<any>(null)
  const onOpen = useCallback(
    (event: any) => setAnchorEl(event.currentTarget),
    [],
  )
  const onClose = useCallback(() => setAnchorEl(null), [])
  return {
    anchorEl,
    open: Boolean(anchorEl),
    onOpen,
    onClose,
  }
}
