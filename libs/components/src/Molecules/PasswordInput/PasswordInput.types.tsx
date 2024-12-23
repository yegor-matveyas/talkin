import { TextInputProps } from '../../Atoms/Input/TextInput/TextInput.types'

type FieldsToExclude =
  | 'multiline'
  | 'maxLength'
  | 'minLength'
  | 'inputType'
  | 'startIcon'
  | 'clearable'
  | 'endIcon'
  | 'onEndIconAction'

export type PasswordInputProps = Omit<TextInputProps, FieldsToExclude> & {}
