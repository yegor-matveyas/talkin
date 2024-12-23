import { TextInputProps } from '../../Atoms/Input/TextInput/TextInput.types'

type FieldsToExclude =
  | 'multiline'
  | 'name'
  | 'maxLength'
  | 'minLength'
  | 'inputType'
  | 'startIcon'
  | 'clearable'
  | 'endIcon'
  | 'onEndIconAction'
  | 'value'
  | 'onChange'

export type SearchInputProps = Omit<TextInputProps, FieldsToExclude> & {
  name?: string
  onSearch: (search: string) => void
}
