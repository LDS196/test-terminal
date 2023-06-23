import React from 'react'
import s from './ModalWindowStatusSubmitSuccess.module.scss'
import iconSuccess from '../../../assets/icons/icon-success.svg'

import Image from 'next/image'
import { Button } from '@/app/components/Button'
import Link from 'next/link'

const ModalWindowStatusSubmitSuccess = () => {
  return (
    <div className={s.modalWrapper}>
      <div className={s.modal}>
        <p className={s.title}>Форма успешно отправлена</p>
        <div className={s.icon}>
          <Image src={iconSuccess} alt='' />
        </div>

        <Button>
          <Link href={'/'}>На главную</Link>
        </Button>
      </div>
    </div>
  )
}

export default ModalWindowStatusSubmitSuccess
