import { ApolloError } from '@apollo/client'

import Typography from '../../Atoms/Typography/Typography'

import styles from './Error.module.scss'

type ErrorProps = {
  error: ApolloError
}

export default function Error({ error }: ErrorProps) {
  return (
    <div className={styles.wrapper}>
      <Typography variant="text">{error.message}</Typography>
    </div>
  )
}
