'use client'
import PaymentForm from '@/app/components/Form/PaymentForm'
import { useState } from 'react'
import ModalWindowStatusSubmitSuccess from '@/app/components/ModalWindowStatusSubmit/ModalWindowStatusSubmitSuccess/ModalWindowStatusSubmitSuccess'
import ModalWindowStatusSubmitError from '@/app/components/ModalWindowStatusSubmit/ModalWindowStatusSubmitError/ModalWindowStatusSubmitError'
import { Title } from '@/app/components/Title'


type Props = {
  params: {
    slug: string
  }
}
export default function Payment({ params: { slug } }: Props) {
  const [status, setStatus] = useState<boolean | null>(null)
  return (
    <>
      <Title>{slug}</Title>
      <PaymentForm setStatus={setStatus} />
      {status === null ? null : status ? (
        <ModalWindowStatusSubmitSuccess />
      ) : (
        <ModalWindowStatusSubmitError setStatus={setStatus} />
      )}
    </>
  )
}
