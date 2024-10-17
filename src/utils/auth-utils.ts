

class AuthUtils {
  static AUTH_TOKEN_KEY = 'auth-token';

  static isAuthenticated = () => {
    return localStorage.getItem(AuthUtils.AUTH_TOKEN_KEY) !== null;
  };

  static getToken = () => {
    return localStorage.getItem(this.AUTH_TOKEN_KEY);
  };

  static setToken = (token: string) => {
    localStorage.setItem(AuthUtils.AUTH_TOKEN_KEY, token);
  };

  static removeToken = () => {
    localStorage.removeItem(AuthUtils.AUTH_TOKEN_KEY);
  };
}

export default AuthUtils;
