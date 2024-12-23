import { useCallback, useEffect, useRef } from 'react'

export type TimeoutArgs = [callback: () => void, delay: number]

export default function useTimeout(...args: TimeoutArgs) {
  const [callback, delay = 500] = args

  const callbackRef = useRef(callback)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const setTimer = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  const clearTimer = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  useEffect(() => {
    setTimer()
    return clearTimer
  }, [delay, setTimer, clearTimer])

  const reset = useCallback(() => {
    clearTimer()
    setTimer()
  }, [clearTimer, setTimer])

  return { reset, clearTimer }
}
