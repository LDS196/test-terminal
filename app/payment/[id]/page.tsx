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
  const [promiseStatus, setPromiseStatus] = useState<PromiseStatuses>(PromiseStatuses.Pending)

  const index = Number(id) - 1
  const operator = items[index].value

  return (
    <Main>
      <Title>{operator}</Title>
      <PaymentForm setPromiseStatus={setPromiseStatus} />
      {promiseStatus === PromiseStatuses.Pending ? null : promiseStatus ===
        PromiseStatuses.Resolved ? (
        <ModalWindowSuccess />
      ) : (
        <ModalWindowError setPromiseStatus={setPromiseStatus} />
      )}
    </Main>
  )
}
