import LayoutAuth from './LayoutAuth/LayoutAuth'
import LoginAuth from './LoginAuth/LoginAuth.container'
import SignupAuth from './SignupAuth/SignupAuth.container'
import TimeoutAuth from './TimeoutAuth/TimeoutAuth'

export default function Auth() {
  return <div />
}

Auth.Layout = LayoutAuth
Auth.Login = LoginAuth
Auth.Signup = SignupAuth
Auth.Timeout = TimeoutAuth
