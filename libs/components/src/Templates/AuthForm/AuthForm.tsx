import { ReactNode } from 'react'
import { To } from 'react-router-dom'

import Button from '../../Atoms/Button/Button'
import Typography from '../../Atoms/Typography/Typography'

import styles from './AuthForm.module.scss'

type TActionLink = {
  text: string
  to: To
}

interface IAuthFormProps {
  title: string
  description: string[]
  submitMessage: string
  children: ReactNode | ReactNode[]
  actionLink?: TActionLink
  onSubmit: () => void
}

export default function AuthForm({
  title,
  description,
  submitMessage,
  children,
  actionLink,
  onSubmit,
}: IAuthFormProps) {
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
          {actionLink && (
            <Typography variant="link" to={actionLink.to}>
              {actionLink.text}
            </Typography>
          )}
        </div>
      </form>
    </div>
  )
}
