'use client'
import Link from 'next/link'
import { Title } from '@/app/components/Title'
import { SubTitle } from '@/app/components/Subtitle'
import { Container } from '@/app/components/Container'
import { Item } from '@/app/components/Item'
import { items } from '@/app/data/data'
import { Main } from '@/app/components/Main'

export default function Home() {
  return (
    <Main>
      <Title>Терминал оплаты</Title>
      <SubTitle>Выберите оператора</SubTitle>
      <Container>
        {items.map((el) => (
          <Item key={el.id}>
            <Link href={`/payment/${el.id}`}>{el.value}</Link>
          </Item>
        ))}
      </Container>
    </Main>
  )
}
