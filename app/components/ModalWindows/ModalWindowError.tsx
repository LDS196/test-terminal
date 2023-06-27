import React from 'react'
import iconError from '../../assets/icons/icon-fail.svg'
import iconClose from '../../assets/icons/icon-close.svg'
import Image from 'next/image'
import { Button } from '@/app/ui/Button'
import ModalWindowImage from '@/app/components/ModalWindows/ModalWindowImage/ModalWindowImage'
import { ModalWindow, ModalWindowTitle, ModalWrapper } from '@/app/components/ModalWindows/style'
import { PromiseStatuses } from '@/app/api/api'

type Props = {
  setPromiseStatus: (value: PromiseStatuses) => void
}

const ModalWindowError = ({ setPromiseStatus }: Props) => {
  const onClickHandler = () => {
    setPromiseStatus(PromiseStatuses.Pending)
  }
  return (
    <ModalWrapper>
      <ModalWindow>
        <ModalWindowTitle>
          <h3>Ошибка</h3>
          <Image onClick={onClickHandler} src={iconClose} alt='' />
        </ModalWindowTitle>
        <ModalWindowImage height={80} width={80} path={iconError} />
        <Button onClick={onClickHandler}>Закрыть</Button>
      </ModalWindow>
    </ModalWrapper>
  )
}

export default ModalWindowError
