import { makeAutoObservable } from 'mobx'
import { User } from 'models/User'


interface UserData extends User {
  id: number;
  createdDate: string;
  updatedDate: string;
}

class UsersService{
  users: UserData[] = []

  constructor() {
    makeAutoObservable(this)
  }

  addUser(u: User) {
    this.users = [
      ...this.users,
      {
        id: Math.max(0, Math.max(...this.users.map(({ id }) => id))) + 1,
        name: u.name,
        surname: u.surname,
        age: u.age,
        city: u.city,
        createdDate: new Date().toLocaleString(),
        updatedDate: new Date().toLocaleString()
      }
    ]
  }

  updateUser(id: number, obj: object) {
    this.users.forEach((e, i) => {
      if (e.id !== id) {
        return
      }
      this.users[i].updatedDate = new Date().toLocaleString()
      for (let prop in obj) {
        this.users[i][prop] = obj[prop]
      }
  });
  }

  deleteUser(id: number) {
    this.users = this.users.filter((u) => u.id !== id)
  }

  deleteAllUsers() {
    this.users = []
  }
}

export default new UsersService()
