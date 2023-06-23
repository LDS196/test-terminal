import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { sendData } from '@/app/api/api'
import { Button } from '@/app/components/Button'



export type FormData = {
  phone: string
  number: number
}
type Props = {
  setStatus: (value: boolean| null) => void
}
const PhoneInput = ({ setStatus }: Props) => {
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
        setStatus(true)
        console.log('Resolved:', result)
      })
      .catch((error) => {
        setStatus(false)
        console.log('Rejected:', error.message)
      })
      .finally(()=> setIsLoading(false))
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='input-container'>
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
      </div>

      <div className='input-container'>
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
      </div>

      <Button disabled={isLoading} type='submit'>Оплатить</Button>
    </form>
  )
}

export default PhoneInput
