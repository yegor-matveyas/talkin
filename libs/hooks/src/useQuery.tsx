import {
  useQuery as useApolloQuery,
  DocumentNode,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode,
} from '@apollo/client'

export default function useQuery<TData = unknown, TVariables extends OperationVariables = OperationVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: QueryHookOptions<NoInfer<TData>, NoInfer<TVariables>>
) {
  return useApolloQuery(query, { ...options, fetchPolicy: options?.fetchPolicy ?? 'cache-and-network' })
}
