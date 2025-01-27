export default class AuthUtils {
  static ACCESS_TOKEN = 'ACCESS_TOKEN'
  static REFRESH_TOKEN = 'REFRESH_TOKEN'

  private static instance: AuthUtils

  constructor() {
    if (AuthUtils.instance) {
      return AuthUtils.instance
    }
    AuthUtils.instance = this
  }

  private setToken(tokenName: string, value: string) {
    localStorage.setItem(tokenName, value)
  }

  setAccessToken(value: string) {
    this.setToken(AuthUtils.ACCESS_TOKEN, value)
  }

  setRefreshToken(value: string) {
    this.setToken(AuthUtils.REFRESH_TOKEN, value)
  }

  private getToken(tokenName: string) {
    return localStorage.getItem(tokenName)
  }

  getAccessToken() {
    return this.getToken(AuthUtils.ACCESS_TOKEN)
  }

  getRefreshToken() {
    return this.getToken(AuthUtils.REFRESH_TOKEN)
  }

  isAuthenticated() {
    return Boolean(this.getAccessToken())
  }
}
