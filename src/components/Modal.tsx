import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import modalService from 'store/modalService'
import usersService from 'store/usersService'
import { User } from 'models/User'
import CloseIcon from './CloseIcon'
import {
  Button,
  CloseModal,
  InputText,
  Pmodal,
  Modal,
  Mcontainer,
  Mheader,
  Mrow,
  MrowFields,
  Checkbox,
  CheckboxCustomizer,
  CheckboxLabel
} from './CommonElements'


const ModalBlock = observer(() => {
  const [agree, setAgree] = useState<boolean>(false)
  const [agreeError, setAgreeError] = useState<boolean>(false)
  const { register, handleSubmit, reset } = useForm<User>()
  const id = modalService.currentId
  const onSubmit = handleSubmit((data) => {
    if (!agree) {
      setAgreeError(true)
    }
    if (id === null || !agreeError && !agree) {
      return
    }
    setAgreeError(false)
    setAgree(false)
    let newVal = Object.fromEntries(Object.entries(data).filter(([_, v]) => v !== ""))

    if (Object.keys(newVal).length) {
      usersService.updateUser(id, newVal)
    }
    reset()
    modalService.close()
  })

  const checkboxHandler = (val) => {
    setAgree(val)
    if (val) {
      setAgreeError(!val)
    }
  }

  return (
    <Pmodal show={modalService.show}>
      <Modal>
        <Mheader>
          <span>Edit name</span>
          <CloseModal onClick={() => modalService.close()}>
            <CloseIcon />
          </CloseModal>
        </Mheader>
        <Mcontainer onSubmit={onSubmit}>
          <MrowFields>
            <InputText
              type="text" placeholder="Name" {...register('name')} />
            <InputText
              type="text" placeholder="Surname" {...register('surname')} />
            <InputText
              type="text" placeholder="City" {...register('city')} />
          </MrowFields>
          <Mrow>
            <CheckboxLabel>
              <Checkbox checked={agree} onChange={(e) => checkboxHandler(e.target.checked) } />
              <CheckboxCustomizer error={agreeError} />
              <span>Totally agree</span>
            </CheckboxLabel>
            <Button>SAVE</Button>
          </Mrow>
        </Mcontainer>
      </Modal>
    </Pmodal>
  );
})

export default ModalBlock;