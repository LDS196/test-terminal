import { FormData } from '@/app/components/Form/PaymentForm'

export function sendData(data: FormData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random()
      if (randomValue < 0.5) {
        resolve('Promise resolved!')
      } else {
        reject(new Error('Promise rejected!'))
      }
    }, 1500)
  })
}

export enum PromiseStatuses {
  Pending,
  Rejected = 1,
  Resolved,
}
