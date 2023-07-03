import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { PromiseStatuses, sendData } from '@/app/api/api'
import { Button } from '@/app/ui/Button'
import { Form, InputContainer } from '@/app/components/Form/style'

export type FormData = {
  phone: string
  number: number
}
type Props = {
  setPromiseStatus: (value: PromiseStatuses) => void
}
const PhoneInput = ({ setPromiseStatus }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    setIsLoading(true)
    sendData(data)
      .then((result) => {
        setPromiseStatus(PromiseStatuses.Resolved)
        console.log('Resolved:', result)
      })
      .catch((error) => {
        setPromiseStatus(PromiseStatuses.Rejected)
        console.log('Rejected:', error.message)
      })
      .finally(() => setIsLoading(false))
  }

  const handlePhoneBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const sanitizedValue = value.replace(/\D/g, '')
    setValue(name as keyof FormData, sanitizedValue)
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const parsedValue = parseInt(value)
    const sanitizedValue = isNaN(parsedValue) ? '' : String(parsedValue)
    setValue(name as keyof FormData, sanitizedValue)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <label htmlFor='phone-input'>Номер телефона</label>
        <InputMask
          id='phone-input'
          mask='+7 (999) 999-99-99'
          placeholder='+7 (999) 999-99-99'
          {...register('phone', {
            required: 'Обязательное поле',
            pattern: {
              value: /^\d{11}$/,
              message: 'Номер телефона должен состоять из 11 цифр',
            },
          })}
          onBlur={handlePhoneBlur}
        />
        <div className='error-message'>{errors.phone && <span>{errors.phone.message}</span>}</div>
      </InputContainer>

      <InputContainer>
        <label htmlFor='number-input'>Сумма</label>
        <input
          type='number'
          id='number-input'
          placeholder='Введите сумму'
          {...register('number', {
            required: 'Обязательное поле',
            min: {
              value: 1,
              message: 'Сумма должно быть не менее 1 рубля',
            },
            max: {
              value: 1000,
              message: 'Сумма должно быть не более 1000 рублей',
            },
          })}
          onChange={handleNumberChange}
        />
        <div className='error-message'>{errors.number && <span>{errors.number.message}</span>}</div>
      </InputContainer>

      <Button disabled={isLoading} type='submit'>
        Оплатить
      </Button>
    </Form>
  )
}

export default PhoneInput
