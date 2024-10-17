import React, { forwardRef } from 'react'
import * as S from './styled'

interface Props{
  placeholder: string;
  error?: string;
  type?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(({ placeholder, error, type, ...rest }, ref) => {
  return (
    <>
      <S.Container placeholder={placeholder} type={type} {...rest} ref={ref}>

      </S.Container>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  )
})

export default Input