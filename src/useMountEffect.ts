import { useEffect, EffectCallback } from 'react'

export const useMountEffect = (effect: EffectCallback) => {
  useEffect(effect, [])
}
