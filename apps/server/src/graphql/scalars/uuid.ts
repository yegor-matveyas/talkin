import { GraphQLScalarType } from 'graphql'

const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

function validate(uuid: unknown): string | never {
  if (typeof uuid !== 'string' || !regex.test(uuid)) {
    throw new Error('invalid uuid')
  }
  return uuid
}

export const UUIDScalar = new GraphQLScalarType({
  name: 'UUID',
  description: 'A simple UUID parser',
  serialize: validate,
  parseValue: validate,
  parseLiteral: (ast) => validate('value' in ast ? ast.value : null),
})
