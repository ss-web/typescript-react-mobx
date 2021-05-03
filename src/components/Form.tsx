import React from 'react'
import { useForm } from 'react-hook-form'
import { observer } from 'mobx-react-lite'
import formService from 'store/formService'
import { Button, InputText, FromContainer, From, FormLinks, FormStyle } from './CommonElements'
import usersService from 'store/usersService'
import { User } from 'models/User'


const FormBlock: React.FC = observer(() => {
  const {register, handleSubmit, reset, formState: { errors }} = useForm<User>()
  const onSubmit = handleSubmit((user) => {
    usersService.addUser(user)
    reset()
  })

  return (
    <>
      <FormLinks>
        <FormStyle active={!formService.isForm2} onClick={() => formService.openForm1()}>Form 1</FormStyle>
        <FormStyle active={formService.isForm2} onClick={() => formService.openForm2()}>Form 2</FormStyle>
      </FormLinks>
      <From onSubmit={onSubmit}>
        <FromContainer isForm2={formService.isForm2}>
          <InputText {...register('name', { required: true })} type="text" placeholder="Name" className={errors.name && 'error'} />
          <InputText {...register('surname', { required: true })} type="text" placeholder="Surname" className={errors.surname && 'error'} />
          <InputText {...register('age', { required: true })} type="number" placeholder="Age" min="0" className={errors.age && 'error'} />
          <InputText {...register('city', { required: true })} type="text" placeholder="City" className={errors.city && 'error'} />
        </FromContainer>
        <Button type="submit" center>ADD</Button>
      </From>
    </>
  );
})

export default FormBlock;
