'use client'
import PaymentForm from '@/app/components/Form/PaymentForm'
import { useState } from 'react'
import ModalWindowStatusSubmitSuccess from '@/app/components/ModalWindowStatusSubmit/ModalWindowStatusSubmitSuccess/ModalWindowStatusSubmitSuccess'
import ModalWindowStatusSubmitError from '@/app/components/ModalWindowStatusSubmit/ModalWindowStatusSubmitError/ModalWindowStatusSubmitError'
import { Title } from '@/app/components/Title'
import { items } from '@/app/data/data'


type Props = {
  params: {
    id: string
  }
}
export default function Payment({ params: { id } }: Props) {
  const [status, setStatus] = useState<boolean | null>(null)
  const index = Number(id)-1
  const operator = items[index].value

  return (
    <>
      <Title>{operator}</Title>
      <PaymentForm setStatus={setStatus} />
      {status === null ? null : status ? (
        <ModalWindowStatusSubmitSuccess />
      ) : (
        <ModalWindowStatusSubmitError setStatus={setStatus} />
      )}
    </>
  )
}
