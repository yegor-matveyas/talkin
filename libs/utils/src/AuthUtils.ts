export default class AuthUtils {
  static ACCESS_TOKEN = 'ACCESS_TOKEN'

  private static instance: AuthUtils

  constructor() {
    if (AuthUtils.instance) {
      return AuthUtils.instance
    }
    AuthUtils.instance = this
  }

  static setAccessToken(value: string) {
    localStorage.setItem(this.ACCESS_TOKEN, value)
  }

  static getAccessToken() {
    return localStorage.getItem(this.ACCESS_TOKEN)
  }

  static deleteAccessToken() {
    localStorage.removeItem(this.ACCESS_TOKEN)
  }

  static isAuthenticated() {
    return Boolean(this.getAccessToken())
  }
}
