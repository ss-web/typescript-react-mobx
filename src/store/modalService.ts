import { makeAutoObservable } from 'mobx'

class ModalService {
  show: boolean = false
  currentId: number|null = null

  constructor() {
    makeAutoObservable(this)
  }

  close() {
    this.show = false
    this.currentId = null
  }

  openModal(id) {
    this.show = true
    this.currentId = id
  }
}

export default new ModalService()