import React, { useState } from 'react'
import * as S from './styles'
import FormAuth from '../../components/FormAuth'
import { UseAuth } from './hooks/authHook'

const Auth = () => {
    const {} = UseAuth()
    
  return (
    <S.Container>
        <FormAuth/>
    </S.Container>
  )
}

export default Auth