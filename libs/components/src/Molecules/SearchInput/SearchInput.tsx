import { useState } from 'react'

import { useDebounce } from '@hooks'

import Input from '../../Atoms/Input/Input'

import type { SearchInputProps } from './SearchInput.types'

export default function SearchInput({ name = 'search-input', onSearch, ...rest }: SearchInputProps) {
  const [value, setValue] = useState<string>('')

  useDebounce(() => onSearch(value), 1000, [value])

  return <Input.Text clearable startIcon="search" name={name} value={value} onChange={setValue} {...rest} />
}
