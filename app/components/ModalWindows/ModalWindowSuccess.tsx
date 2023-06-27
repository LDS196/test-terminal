import React from 'react'
import iconSuccess from '../../assets/icons/icon-success.svg'
import { Button } from '@/app/ui/Button'
import Link from 'next/link'
import ModalWindowImage from '@/app/components/ModalWindows/ModalWindowImage/ModalWindowImage'
import { ModalWindow, ModalWindowTitle, ModalWrapper } from '@/app/components/ModalWindows/style'

const ModalWindowSuccess = () => {
  return (
    <ModalWrapper>
      <ModalWindow>
        <ModalWindowTitle>
          <h3>Форма успешно отправлена</h3>
        </ModalWindowTitle>
        <ModalWindowImage height={80} width={80} path={iconSuccess} />
        <Button>
          <Link href={'/'}>На главную</Link>
        </Button>
      </ModalWindow>
    </ModalWrapper>
  )
}

export default ModalWindowSuccess
