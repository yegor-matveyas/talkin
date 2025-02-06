import Typography from '../../../Atoms/Typography/Typography'

export default function TimeoutAuth() {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Typography variant="text" style={{ display: 'inline-block' }}>
        Timed out
      </Typography>
      <Typography variant="link" to="/auth/login">
        Log in
      </Typography>
    </div>
  )
}
