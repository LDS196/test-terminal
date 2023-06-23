import React from 'react'
import s from './ModalWindowStatusSubmitError.module.scss'
import iconError from '../../../assets/icons/icon-fail.svg'
import iconClose from '../../../assets/icons/icon-close.svg'
import Image from 'next/image'
import { Button } from '@/app/components/Button'
type Props = {
  setStatus: (value: boolean | null) => void
}

const ModalWindowStatusSubmitError = ({ setStatus }: Props) => {
  const onClickHandler = () => {
    setStatus(null)
  }
  return (
    <div className={s.modalWrapper}>
      <div className={s.modal}>
        <div className={s.title}>
          <p>Ошибка</p>
          <Image onClick={onClickHandler} src={iconClose} alt='' />
        </div>
        <div className={s.icon}>
          <Image src={iconError} alt='' />
        </div>
        <div className={s.button}>
          <Button onClick={onClickHandler}>
            Закрыть
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ModalWindowStatusSubmitError
