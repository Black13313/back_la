const dbUsers = [
  {
    name: 'Vixar',
    email: 'vixar@gmail.com',
    password: '123123',
    role: 'ADMIN'
  },
  {
    name: 'Black',
    email: 'black@gmail.com',
    password: '111111',
    role: 'STAFF'
  },
];

class UserService {
  signIn(email: string, password: string) {
    try {
      const user = dbUsers.filter((x: any) =>
        x.email === email
        && x.password === password
      )

      if (user.length <= 0) {
        throw new Error('Email and password incorrect')
      }

      return user[0]
    } catch (err) {
      throw err
    }
  }
}

export default UserService;