import React from 'react'
import styled from 'styled-components'

import Image from 'next/image'

const ModalWindowImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
`
type Props = {
  path: string
  width: number
  height: number
}
const ModalWindowImage = ({ path, width, height }: Props) => {
  return (
    <ModalWindowImageContainer>
      <Image src={path} alt='' width={width} height={height} />
    </ModalWindowImageContainer>
  )
}

export default ModalWindowImage
