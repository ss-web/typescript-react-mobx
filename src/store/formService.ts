import { makeAutoObservable } from 'mobx'

class FormService {
  isForm2: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  openForm1() {
    this.isForm2 = false
  }

  openForm2() {
    this.isForm2 = true
  }
}

export default new FormService()