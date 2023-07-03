'use client'
import PaymentForm from '@/app/components/Form/PaymentForm'
import { useState } from 'react'
import ModalWindowSuccess from '@/app/components/ModalWindows/ModalWindowSuccess'
import ModalWindowError from '@/app/components/ModalWindows/ModalWindowError'
import { Title } from '@/app/ui/Title'
import { items } from '@/app/data/data'
import { Main } from '@/app/ui/Main'
import { PromiseStatuses } from '@/app/api/api'

type Props = {
  params: {
    id: string
  }
}
export default function Payment({ params: { id } }: Props) {
  const [promiseStatus, setPromiseStatus] = useState(PromiseStatuses.Pending)

  const operator = items.find((item) => item.id === id)?.value

  const modalWindow = (() => {
    switch (promiseStatus) {
      case PromiseStatuses.Resolved:
        return <ModalWindowSuccess />
      case PromiseStatuses.Rejected:
        return <ModalWindowError setPromiseStatus={setPromiseStatus} />
      default:
        return null
    }
  })()

  return (
    <Main>
      <Title>{operator}</Title>
      <PaymentForm setPromiseStatus={setPromiseStatus} />
      {modalWindow}
    </Main>
  )
}
