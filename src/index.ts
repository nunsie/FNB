type Auth = {
  username: string
  password: string
}

export default class FNB {

  username: string
  password: string

  constructor(auth: Auth) {
    this.username = auth.username
    this.password = auth.password
  }
}