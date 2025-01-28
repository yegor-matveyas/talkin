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

  private static setToken(tokenName: string, value: string) {
    localStorage.setItem(tokenName, value)
  }

  static setAccessToken(value: string) {
    this.setToken(AuthUtils.ACCESS_TOKEN, value)
  }

  static setRefreshToken(value: string) {
    this.setToken(AuthUtils.REFRESH_TOKEN, value)
  }

  private static getToken(tokenName: string) {
    return localStorage.getItem(tokenName)
  }

  static getAccessToken() {
    return this.getToken(AuthUtils.ACCESS_TOKEN)
  }

  static getRefreshToken() {
    return this.getToken(AuthUtils.REFRESH_TOKEN)
  }

  static isAuthenticated() {
    return Boolean(this.getAccessToken())
  }
}
