'use client'
import styles from './page.module.css'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`
const SubTitle = styled.h4`
  font-size: 20px;
  color: green;
`

export default function Home() {


  return (
    <main className={styles.main}>
      <Title>Терминал оплаты</Title>
      <SubTitle>Выберите оператора</SubTitle>
    </main>
  )
}
