export class LoginPayload {
  email: string;
  password: string;
  constructor() {
    this.email = 'eduard240300@gmail.com';
    this.password = `${new Date().getTime()}`;
  }
}
