import { useEffect } from 'react'
import useTimeout, { TimeoutArgs } from './useTimeout'

type DebounceArgs = [...TimeoutArgs, dependencies: unknown[]]

export default function useDebounce(...args: DebounceArgs) {
  const [callback, delay = 500, dependencies = []] = args

  const { reset, clearTimer } = useTimeout(callback, delay)

  useEffect(reset, [...dependencies, reset])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(clearTimer, [])
}
