import { ReactNode } from 'react'

import Button from '../../Atoms/Button/Button'
import Typography from '../../Atoms/Typography/Typography'

import styles from './AuthForm.module.scss'

interface IAuthFormProps {
  title: string
  description: string[]
  submitMessage: string
  children: ReactNode | ReactNode[]
  onSubmit: () => void
}

export default function AuthForm({ title, description, submitMessage, children, onSubmit }: IAuthFormProps) {
  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.header}>
          <Typography variant="subtitle" align="center">
            {title}
          </Typography>
          {description.map((line) => (
            <Typography key={line} variant="caption" align="center">
              {line}
            </Typography>
          ))}
        </div>
        {children}
        <div className={styles.actions}>
          <Button fullWidth type="submit" variant="contained">
            {submitMessage}
          </Button>
        </div>
      </form>
    </div>
  )
}
