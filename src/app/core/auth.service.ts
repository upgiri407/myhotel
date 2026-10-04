// Auth service: stores login state and token for protected routes.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor(private http: HttpClient) {}
  // Tracks whether user is currently authenticated.
  isLoggedIn = true;

  // JWT-like auth token stored in memory.
  private token = '';

  // login(): usually calls backend API and stores token after successful response.
  login() {
    // assume API response
//     return this.http.post<any>(
//     'https://example.com/login',
//     {
//       email: email,
//       password: password
//     }
//   );
    const response = {
      accessToken: 'eyJhbGciOiJIUzI1NiIs...'
    };

    this.token = response.accessToken;
    this.isLoggedIn = true;
  }
// private token = '';

// setToken(token: string) {
//   this.token = token;
// }

  // getToken(): used by interceptor to attach bearer token to requests.
  getToken() {
    return this.token;
  }

  // logout(): clears the token and marks user as logged out.
  logout() {
    this.token = '';
    this.isLoggedIn = false;
  }
}