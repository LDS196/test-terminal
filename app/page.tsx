'use client'
import Link from 'next/link'
import { Title } from '@/app/ui/Title'
import { SubTitle } from '@/app/ui/Subtitle'
import { items } from '@/app/data/data'
import { Main } from '@/app/ui/Main'
import { Container, Item } from '@/app/style'

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
