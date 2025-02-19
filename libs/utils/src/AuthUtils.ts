import dayjs from 'dayjs'

export default class AuthUtils {
  static ACCESS_TOKEN = 'ACCESS_TOKEN'
  static EXPIRES_AT = 'EXPIRES_AT'

  private static instance: AuthUtils

  constructor() {
    if (AuthUtils.instance) {
      return AuthUtils.instance
    }
    AuthUtils.instance = this
  }

  static setAccessToken(token: string, expiresAt: string) {
    localStorage.setItem(this.ACCESS_TOKEN, token)
    localStorage.setItem(this.EXPIRES_AT, expiresAt)
  }

  static getAccessToken() {
    return localStorage.getItem(this.ACCESS_TOKEN)
  }

  static deleteAccessToken() {
    localStorage.removeItem(this.ACCESS_TOKEN)
    localStorage.removeItem(this.EXPIRES_AT)
  }

  static isAuthenticated() {
    const expiresAt = dayjs(localStorage.getItem(this.EXPIRES_AT)).add(7, 'day')
    if (dayjs().isAfter(expiresAt)) {
      this.deleteAccessToken()
    }
    return Boolean(this.getAccessToken())
  }

  static isTokenExpired() {
    return dayjs().isAfter(dayjs(localStorage.getItem(this.EXPIRES_AT)))
  }
}
