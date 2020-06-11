import React from 'react'
/** style */
import * as El from './FormHome.style'
/** components */
import Input from 'components/Input/Input'
import Button from 'components/Button/Button'

const FormHome = () => {
  return (
    <El.FormHomeContainer>

      <El.FormBox>
        <h5>Please, insert your account ID</h5>
        <Input 
          placeholder='account ID number'
          size='lg'
        />
        <Button
          actionClick={() => {}}
          color='secondary'
          size='lg'
        >
          Send
        </Button>
      </El.FormBox>
      
    </El.FormHomeContainer>
  )     
}

export default FormHome