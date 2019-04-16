import { useEffect, EffectCallback } from 'react'

export const useUnmountEffect = (effect: ReturnType<EffectCallback>) => {
  useEffect(() => {
    return effect
  }, [])
}
